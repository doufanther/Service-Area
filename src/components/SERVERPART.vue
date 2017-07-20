<template>
	<div class="serverpart">
		<ul>
			<router-link to="/serverpartshop">
				<li v-for="(item,index) in serverpart" @click="goDetail(index)" :shop="selectedShop">
					<p>内码{{item.SERVERPART_ID}}</p>
					<p>服务区名称	{{item.SERVERPART_NAME}}</p>
					<p>服务区编码{{item.SERVERPART_CODE}}</p>
					<p>地址{{item.SERVERPART_ADDRESS}}</p>
				</li>
			</router-link>
		</ul>
		<serverpart-shop :shop="selectedShop" v-if="selectedShop"></serverpart-shop>	
	</div>
</template>

<script>
	import serverpartshop from './serverpartshop.vue'
	
	import axios from 'axios'
	const status=200;
	export default{
		props:{
			
		},
		data(){
			return {
				url:'http://test.eshangtech.com:6060/HighWay/Handler/handler_ajax.ashx?action_type=getTotalServerPart',
				serverpart:'',
				selectedShop: ''//内码
			}
		},
		created(){
			axios.get(this.url).then((res)=>{
				console.log(res);
				if(res.status===status){
					this.serverpart=res.data.SERVERPARTObject;
				}
			})
		},
		computed:{
			
		},
		methods:{
			goDetail(index) {
				this.selectedShop=this.serverpart[index].SERVERPART_ID
			}
		},
		components: {
		   'serverpart-shop':serverpartshop
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	.serverpart{
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