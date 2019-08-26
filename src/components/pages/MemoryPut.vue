<template>
  <div>
    <div class="flex justify-between items-center border border-solid border-gray-500 things">
      <thing
        v-for="(thing, index) in things"
        :key="index"
        :thing="thing"
        :index="index"
        :currentThing="currentThing"
      />
    </div>
    <div class="cabinets flex">
      <div class="flex flex-col cabin-1">
        <cabinet
          v-for="cabinet in cabinets.slice(0, 3)"
          :key="cabinet.index"
          :cabinet="cabinet"
          v-on:putThing="onPutThing"
          width='107' height='85'
        />
      </div>
      <div class="flex flex-col cabin-2">
        <cabinet
          v-for="cabinet in cabinets.slice(3, 6)"
          :key="cabinet.index"
          :cabinet="cabinet"
          v-on:putThing="onPutThing"
          width='109' height='85'
        />
      </div>
      <div class="flex flex-col cabin-3">
        <cabinet
          v-for="cabinet in cabinets.slice(6, 9)"
          :key="cabinet.index"
          :cabinet="cabinet"
          v-on:putThing="onPutThing"
          width='124' height='56'
        />
      </div>
      <div class="flex flex-col cabin-3">
        <cabinet
          v-for="cabinet in cabinets.slice(9, 12)"
          :key="cabinet.index"
          :cabinet="cabinet"
          v-on:putThing="onPutThing"
          width='124' height='56'
        />
      </div>
    </div>
  </div>
</template>

<script>
import Cabinet from '@/components/memory/Cabinet'
import Thing from '@/components/memory/Thing'

export default {
  name: 'MemoryPut',
  components: {
    Cabinet,
    Thing
  },
  data () {
    return {
      things: [
        {
          thumbnail: 'pen',
          chosen: false,
        },
        {
          thumbnail: 'glasses',
          chosen: false,
        },
        {
          thumbnail: 'wallet',
          chosen: false,
        },
        {
          thumbnail: 'envelope-open',
          chosen: false,
        },
        {
          thumbnail: 'book',
          chosen: false,
        },
        {
          thumbnail: 'camera',
          chosen: false,
        },
        {
          thumbnail: 'lightbulb',
          chosen: false,
        },
        {
          thumbnail: 'box',
          chosen: false,
        },
        {
          thumbnail: 'key',
          chosen: false,
        },
        {
          thumbnail: 'clock',
          chosen: false,
        }
      ],
      currentThing: null,
      cabinets: [
        {
          index: 0,
          full: false,
          contain: null
        },
        {
          index: 1,
          full: false,
          contain: null
        },
        {
          index: 2,
          full: false,
          contain: null
        },
        {
          index: 3,
          full: false,
          contain: null
        },
        {
          index: 4,
          full: false,
          contain: null
        },
        {
          index: 5,
          full: false,
          contain: null
        },
        {
          index: 6,
          full: false,
          contain: null
        },
        {
          index: 7,
          full: false,
          contain: null
        },
        {
          index: 8,
          full: false,
          contain: null
        },
        {
          index: 9,
          full: false,
          contain: null
        },
        {
          index: 10,
          full: false,
          contain: null
        },
        {
          index: 11,
          full: false,
          contain: null
        },
      ]
    }
  },
  mounted: function() {
    this.currentThing = 0
  },
  methods: {
    nextThing: function() {
      this.currentThing += 1
    },
    onPutThing: function(cabinet) {
      this.cabinets[cabinet].full = true
      this.cabinets[cabinet].contain = this.things[this.currentThing]
      this.things[this.currentThing].chosen = true
      this.currentThing += 1
    }
  }
}
</script>

<style>
.things {
  margin: 5px
}
.cabinets {
  background-image: url('~@/assets/images/cabinets.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0.5rem auto;
  width: 625px;
  height: 312px;
}

.cabin-1 {
  margin-left: 17px;
  margin-top: 15px;
}
.cabin-1 > * {
  margin-bottom: 10px;
}
.cabin-2 {
  margin-left: 43px;
  margin-top: 15px;
}
.cabin-2 > * {
  margin-bottom: 10px;
}
.cabin-3 {
  margin-left: 41px;
  margin-top: 118px;
}
.cabin-3 > * {
  margin-bottom: 7px;
}
</style>
