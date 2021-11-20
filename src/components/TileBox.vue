<template>
<div class="tile is-ancestor mt-3">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
      <div class="card">
      <header class="card-header">
    <p class="card-header-title">
    Skeleton Loader
    </p>
   
  </header>
  <div class="card-content">
    <div class="content">
    <Skeleton />
    <p></p>
    </div>
  </div>
</div>

      </div>
      <div class="tile is-parent">
			<div class="card">
      <header class="card-header">
    <p class="card-header-title">
  Tab
    </p>
   
  </header>
  <div class="card-content">
    <div class="content">
  <o-tabs v-model="activeTab" :multiline="multiline">
      <o-tab-item value="0" label="Pictures">
        Lorem ipsum dolor sit amet.
      </o-tab-item>

      <o-tab-item :value="1" label="Music">
        Lorem <br />
        ipsum <br />

      </o-tab-item>

      <o-tab-item value="2" :visible="showBooks" label="Books">
        What light is light, if Silvia be not seen? <br />
        What joy is joy, if Silvia be not by— <br />
       
      </o-tab-item>

      <o-tab-item value="3" label="Videos" icon="video" disabled>
      <AutoComplete />
      </o-tab-item>
    </o-tabs>
    </div>
  </div>
</div>
    
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child ">
<div class="card">
<header class="card-header">
    <p class="card-header-title">
     Data Table
    </p>
   
  </header>
  <div class="card-content">
    <div class="content">
  <o-table :data="data" :columns="columns"></o-table>
    </div>
  </div>
</div>
     
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child ">
    <div class="card">
    <header class="card-header">
    <p class="card-header-title">
     Forms
    </p>
  </header>
  <div class="card-content">
    <div class="content">
 <Forms/>
    </div>
  </div>
</div>
    </article>
  </div>
</div>
</template>

<script>
import AutoComplete from './AutoComplete.vue'
import Forms from './Forms.vue'
import Skeleton from './Skeleton.vue'
  export default {
        name: 'TileBox',
    data() {
      return {
        data: [
          {
            id: 1,
            first_name: 'Jesse',
            last_name: 'Simmons',
            date: '2016-10-15 13:43:27',
            gender: 'Male'
          },
          {
            id: 2,
            first_name: 'John',
            last_name: 'Jacobs',
            date: '2016-12-15 06:00:53',
            gender: 'Male'
          },
          {
            id: 3,
            first_name: 'Tina',
            last_name: 'Gilbert',
            date: '2016-04-26 06:26:28',
            gender: 'Female'
          },
          {
            id: 4,
            first_name: 'Clarence',
            last_name: 'Flores',
            date: '2016-04-10 10:28:46',
            gender: 'Male'
          },
          {
            id: 5,
            first_name: 'Anne',
            last_name: 'Lee',
            date: '2016-12-06 14:38:38',
            gender: 'Female'
          }
        ],
        columns: [
          {
            field: 'id',
            label: 'ID',
            width: '40',
            numeric: true
          },
          {
            field: 'first_name',
            label: 'First Name'
          },
          {
            field: 'last_name',
            label: 'Last Name'
          },
          {
            field: 'date',
            label: 'Date',
            position: 'centered'
          },
          {
            field: 'gender',
            label: 'Gender'
          }
        ]
      
      }
    },
     components: {
AutoComplete,
Forms,
Skeleton
  },
    methods: {
     
    },
    computed: {
 
    }
  }
</script>
<style lang="scss">



</style>