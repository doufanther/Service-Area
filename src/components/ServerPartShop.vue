<template>
	<div class="serverpartshop">
		<!--<div class="main" v-show="shopShow">
			<h1>门店</h1>
			<ul>
				<li v-for="(item,index) in serverpartshop"  @click="goDetail(index)">
					<p>内码{{item.SERVERPARTSHOP_ID}}</p>
					<p>门店名称	{{item.SHOPNAME}}</p>
					<p>门店编码{{item.SHOPCODE}}</p>
				</li>
			</ul>
		</div>
		<endac-count :count="selectedCount" :isShow="shopShow" v-if="selectedCount"></endac-count>-->
	门店
	</div>
	
</template>

<script>
	import Endaccount from './Endaccount.vue'
	import axios from 'axios'
	const status=200;
	export default {
		components: {
		   'endac-count':Endaccount
		},
	    props: {
		    shop: String
		},
		data() {
		    return {
		    	url:'http://test.eshangtech.com:6060/HighWay/Handler/handler_ajax.ashx?action_type=getServerPartShop&action_data=',
				serverpartshop:'',
				selectedCount:'',
				shopShow:'true'
		    }
		},
		created(){
			axios.get(this.url+this.shop).then((res)=>{
				console.log(res);
				if(res.status===status){
					this.serverpartshop=res.data.ServerPartShopObject;
				}
			})
		},
		computed: {
		   
		},
		methods: {
		    goDetail(index) {
				this.shopShow=!this.shopShow;
      			this.selectedCount=this.serverpartshop[index].SERVERPARTSHOP_ID
			}
		}
	}
</script>


<style lang="scss" scoped type="text/css">
	.serverpartshop{
		width:100%;
		text-align: center;
		ul{
			
			li{
				margin-bottom: 20px;
				background:#000;
				color: #fff;
			}
		}
	}
</style>