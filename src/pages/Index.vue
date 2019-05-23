
<template>
  <Layout>
<div class="container-fluid container-full">
    <div class="row">
        <div class="col-md-3 col-xs-1 p-l-0 p-r-0 siderbar" id="sidebar">
            <div class="list-group panel">
                 <img fluid  src="../assets/images/the-godfather.svg">
            </div>
            <div class="menu-url">
              <ul>
                <li 
                 v-bind:style="{ fontSize: (12 + parseInt(item.popularity)) + 'px' }"
                 :class="{highlight:item.selected}" @click="$set(item, 'selected', true)"
                 v-for="(item, index) in myJson" v-on:click="read(index)"  :key="index">{{item.name}}</li>
              </ul>
            </div>
        </div>
        <main class="col-md-9 col-xs-11 p-l-2 p-t-2">
            <a href="#sidebar" data-toggle="collapse"><i class="fa fa-navicon fa-lg"></i></a>
            <div class="container main">
              <div class="row">
              <div class="col-md-3">
                <div class="avatar">
                   <img fluid v-bind:src="`../avatar/${myJson[index].image}`" />
                </div>
              </div>
              <div class="col-md-8">
                <h2>{{ myJson[index].name }}</h2>
                <div class="row">
                  <div class="col-md-3">
                  <h4>Populartity</h4>
                  </div>
                  <div class="col-md-6">
                    <input type="range" v-on:input="onChg($event)" v-bind:value="myJson[index].popularity" class="custom-range" id="customRange1">
                  </div>
                </div>
                <div class="row">
                  <div class="content">
                    <h4>Biography</h4>
                    {{ myJson[index].biography }}
                  </div>
                </div>
              </div>
              </div>
            </div>
        </main>
    </div>
</div>
</Layout>
</template>


<style lang="scss">
section {
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid #e2e2e2;
}

.container-full{
  min-height: 100vh;
  main{
    color: white;
    padding-top: 30vh;
    .avatar{
        -webkit-box-shadow: 0px 2px 31px 8px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 2px 31px 8px rgba(0,0,0,0.75);
        box-shadow: 0px 2px 31px 8px rgba(0,0,0,0.75);
        max-width: 150px;
        float: right;
        border: 1px solid #737479;
    }
     h4{
            font-size: 16px;
          }
    .content{
          background-color: #1a1d24;
          padding: 15px;
          font-size: 13px;
          border-radius: 4px;
         
    }
    h2{
      margin-left: -15px;
    }
  }
  .siderbar{
    background: rgba(0, 0, 0, 0.6); 
    min-height: 100vh;
    img{
          max-width: 200px;
    margin: auto;
    padding-top: 10vh;
    }
    .menu-url{
      margin-top: 20vh;
      ul{
      list-style: none;
      padding-left: 0px;
      li{
        color: white;
        text-align: center;
        cursor: pointer;
        &.highlight{
          color: #3e9dbb;
        }
      }
    }
    }
  }
}
.my-hr-line{
    position: relative;
    left: -15px;
    width: calc(100% + 30px);
    /* height: 1px; */
    border: 0.5px solid #E4E5E6;
    width: 100vw;
    position: relative;
    left: 50%;
    margin-left: -50vw;
    &.white{
       border: 0.5px solid white;
    }
}
html{
  overflow-x: hidden;
}
img{
  width: 100%;
}

/* closed state */
#sidebar .list-group .list-group-item[aria-expanded="false"]::after {
  content: " \f0d7";
  font-family: FontAwesome;
  display: inline;
  text-align: right;
  padding-left: 5px;
}

/* open state */
#sidebar .list-group .list-group-item[aria-expanded="true"] {
  background-color: #222;
}
#sidebar .list-group .list-group-item[aria-expanded="true"]::after {
  content: " \f0da";
  font-family: FontAwesome;
  display: inline;
  text-align: right;
  padding-left: 5px;
}

/* level 1*/
#sidebar .list-group .collapse .list-group-item  {
  padding-left: 20px;
}

/* level 2*/
#sidebar .list-group .collapse > .collapse .list-group-item {
  padding-left: 30px;
}

/* level 3*/
#sidebar .list-group .collapse > .collapse > .collapse .list-group-item {
  padding-left: 40px;
}

@media (max-width:48em) {
    /* overlay sub levels on small screens */
    #sidebar .list-group .collapse.in, #sidebar .list-group .collapsing {
        position: absolute;
        z-index: 1;
        width: 190px;
    }
    #sidebar .list-group > .list-group-item {
        text-align: center;
        padding: .75rem .5rem;
        min-width: 39px;
    }
    /* hide caret icons of top level when collapsed */
    #sidebar .list-group > .list-group-item[aria-expanded="true"]::after,
    #sidebar .list-group > .list-group-item[aria-expanded="false"]::after {
        display:none;
    }
}

/* change transition animation to width when entire sidebar is toggled */
#sidebar.collapse {
  -webkit-transition-timing-function: ease;
       -o-transition-timing-function: ease;
          transition-timing-function: ease;
  -webkit-transition-duration: .2s;
       -o-transition-duration: .2s;
          transition-duration: .2s;
}

#sidebar.collapsing {
  opacity: 0.8;
  width: 0;
  -webkit-transition-timing-function: ease-in;
       -o-transition-timing-function: ease-in;
          transition-timing-function: ease-in;
  -webkit-transition-property: width;
       -o-transition-property: width;
          transition-property: width;

}
</style>

<script>
import json from '../data.json';
export default {
  metaInfo: {
    title: "Facebook Developer Circles Innovation Challenge"
  },
  data(){
      return{
          myJson: json.employees,
          index: 0,
          readed: [0]
      }
  },
  components: {
  }
  ,methods: {
    read: function (index) {
      // `this` inside methods points to the Vue instance
      this.index = index;
      let array = this.readed;
      array.push(index);
      this.readed = array
    },
    onChg: function (evt){
      let Json = this.myJson;
      Json[this.index].popularity = evt.target.value;
      this.myJson = Json;
    }
  }
};
</script>