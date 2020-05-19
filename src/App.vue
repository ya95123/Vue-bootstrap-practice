<template lang="pug">
  //- .container
  //-   .row
  //-     .col-3.bg-success
  //-     .col-3.bg-danger
  //-     .col-3.bg-warning
  //-     .col-3.bg-primary
  b-container(fluid)
    b-row(align-h="center")
      b-col.bg-success(cols="12" md="6" lg="3")
      b-col.bg-danger(cols="12" md="6" lg="3")
    //- b-col.bg-warning(col="3")
    //- b-col.bg-primary(col="3")

</template>

<script>

export default {
  name: 'App'

}
</script>

<style lang="stylus" scoped>
  .row div
    height 300px
</style>
