<template lang="pug">
  //- 原Bootstrap寫法
  //- .container
  //-   .row
  //-     .col-3.bg-success
  //-     .col-3.bg-danger
  //-     .col-3.bg-warning
  //-     .col-3.bg-primary

  //- Bootstrap Vue 寫法
  b-container
    b-row(align-h="center")
      b-col(cols="12" md="6" lg="4" xl="3")

</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      cards: []
    }
  },
  mounted () {
    this.axios.get('https://api.kento520.tw/zack/')
      .then(result => {
        this.cards = result.data.slice(0, 10)
        console.log(this.cards)
      })
  }

}
</script>
