<template>
    <form @submit.prevent="handleSubmit" method="POST">
 
    <h1>Create a House listing</h1>
      <fieldset>
        <!-- Address information -->
        <label for="street">Street name</label>
        <input type="text" required id="street" name="street" v-model="streetName" placeholder= "Enter a street name">

        <div class="adress-info">
          <label for="house-number">House Number</label>
          <input type="text" inputmode="numeric" id="house-number" required v-model="houseNumber" placeholder="Enter your address number" >

           <label for="additional">Additional (Optional)</label>
          <input type="text" id="house-number"  v-model="additionalInfo" placeholder="e.g A">
        </div>


       <label for="postal-code">Postal Code</label>
       <input type="text" id="postal-code"  v-model="postalCode" placeholder="e.g 1000 AA" required> 
       
       <label for="city">City</label>
       <input type="text" id="city"  v-model="city" placeholder="e.g Amsterdam">
   
      </fieldset>

<fieldset>
  <label for="pic">Upload Picture</label>
  <input type="file" name="picture" id="pic" >

<label for="price"></label>
<input id="price" type="text" v-model="price" required placeholder="e.g $150.000">

<label for="size">Size</label>
<input id="size" type="text" required v-model="size" placeholder="e.9 60m2">


<label for="bedroom">Bedroom</label>
<input type="text" inputmode="numeric" required v-model="amountBedroom" placeholder="Enter Amount">

<label for="bathroom">Bathroom</label>
<input type="text" inputmode="numeric" required v-model="amountBathroom" placeholder="Enter Amount">

<label for="construction-date">Construction date</label>
<input type="text" required placeholder="e.g 1990" v-model="constructionDate">

<label for="description">Description</label>
<input type="text" required placeholder="Enter description" v-model="description">


<select name="garage" id="garage" v-model="garage">
  <option value="yes">Yes</option>
  <option value="no">No</option>
</select>
</fieldset>


<button>Post</button>
    </form>
 
</template>

<script>
export default {

data(){
  return {
    streetName: "",
    houseNumber: null,
    additionalInfo: "",
    postalCode: "", 
    city: "",
    housePic: "",
    price: "",
    size:"",
    amountBedrooms: "",
    amountBathroom: "",
    garage:"",
    constructionDate: "",
    description: ""
     

  }
},
methods: {
handleSubmit() {
  console.log('Street name', this.streetName)
  console.log('House number:', this.houseNumber);
}
}
}
</script>

<style>

</style>