<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { validateCostProfile } from '@/Validators/Validator';
import LoaderComponent from '@/components/icons/LoaderComponent.vue';

const cost = reactive({
  returnRatePercent: null,
  paymentFeePercent: null,
  packagingCost: null,
  shippingCost: null,
  miscCost: null,
})

const route = useRoute()
const product_id = route.params.id

const errors = reactive({
  product_id: '',
  return_rate: '',
  payment_gateway_fee: '',
  packaging_cost: '',
  shipping_cost: '',
  miscellanious: '',
})
const isLoading = ref(false)

async function saveAndCalculateCost(){
  try{
    isLoading.value = true
    const res = await axios.post(`https://margin-lens-backend.vercel.app/cost-profile/add/${product_id}`, cost)
    console.log(res.status)
    router.push(`/report/product/${product_id}`)
}
  catch(err){
    console.log(product_id)
    isLoading.value = false
  }
  finally{
    console.log(product_id)
    isLoading.value = false
  }
}

</script>

<template>
    <div class="container">
      <LoaderComponent v-if="isLoading"/>
      <div class="page-header">
        <h1>Hidden Cost Profile</h1>
        <a href="/products" class="btn btn-outline">Back to Products</a>
      </div>

      <div id="alert"></div>

      <div class="card">
        <p style="margin-bottom: 1.2rem; color: #666; font-size: 0.9rem">
          These are the real costs that silently eat into your margin. All
          fields are optional — leave at 0 if not applicable.
        </p>

        <div class="form-row">
          <div class="form-group">
            <div class="field-header">
              <label>Return Rate %</label>
              <span v-if="errors.return_rate" class="error">{{ errors.return_rate }}</span>
            </div>
            <input
              v-model.number="cost.returnRatePercent"
              @input="errors.return_rate = (cost.returnRatePercent >= 0) ? '' : 'Return Rate must be greater than 0'"
              placeholder="e.g. 5"
              step="0.01"
              min="0"
              max="100"
            />
          </div>
          <div class="form-group">
            <div class="field-header">
              <label>Payment Gateway Fee %</label>
              <span v-if="errors.payment_gateway_fee" class="error">{{ errors.payment_gateway_fee }}</span>
            </div>
            <input
              v-model.number="cost.paymentFeePercent"
              @input="errors.payment_gateway_fee = (cost.paymentFeePercent >= 0) ? '' : 'Gateway must be greater than 0'"
              placeholder="e.g. 2.5"
              step="0.01"
              min="0"
              max="100"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <div class="field-header">
              <label>Packaging Cost (per unit)</label>
              <span v-if="errors.packaging_cost" class="error">{{ errors.packaging_cost }}</span>
            </div>
            <input
              v-model.number="cost.packagingCost"
              @input="errors.packaging_cost = (cost.packagingCost >= 0) ? '' : 'Packaging must be greater than 0'"
              placeholder="e.g. 150"
              step="0.01"
              min="0"
            />
          </div>
          <div class="form-group">
            <div class="field-header">
              <label>Shipping Cost (per unit)</label>
              <span v-if="errors.shipping_cost" class="error">{{ errors.shipping_cost }}</span>
            </div>
            <input
              v-model.number="cost.shippingCost"
              @input="errors.shipping_cost = (cost.shippingCost >= 0) ? '' : 'Shipping must be greater than 0'"
              placeholder="e.g. 200"
              step="0.01"
              min="0"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="field-header">
              <label>Miscellaneous Cost (per unit)</label>
              <span v-if="errors.miscellanious" class="error">{{ errors.miscellanious }}</span>
            </div>
          <input
            v-model.number="cost.miscCost"
            @input="errors.miscellanious = (cost.miscCost >= 0) ? '' : 'Miscellanious must be greater than 0'"
            placeholder="e.g. 50"
            step="0.01"
            min="0"
          />
        </div>

        <div class="actions">
          <button @click="saveAndCalculateCost()" class="btn btn-success" id="calcBtn">
            Save & Calculate
          </button>
        </div>
      </div>
    </div>
</template>