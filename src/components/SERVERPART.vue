<template>
	<div class="SERVERPART">
		<ul>
			<li v-for="item in SERVERPART">
				<p>内码{{item.SERVERPART_ID}}</p>
				<p>服务区名称	{{item.SERVERPART_NAME}}</p>
				<p>服务区编码{{item.SERVERPART_CODE}}</p>
				<p>地址{{item.SERVERPART_ADDRESS}}</p>
			</li>
		</ul>
		<v-main></v-main>
	</div>
</template>

<script>
	import ServerPartShop from './components/ServerPartShop.vue'
	import axios from 'axios'
	const status=200;
	export default{
		props:{
			
		},
		data(){
			return {
				url:'http://test.eshangtech.com:6060/HighWay/Handler/handler_ajax.ashx?action_type=getTotalServerPart',
				SERVERPART:''
			}
		},
		created(){

			axios.get(this.url).then((res)=>{
				console.log(res);
				if(res.status===status){
					this.SERVERPART=res.data.SERVERPARTObject;
				}
			})
		},
		computed:{
			
		},
		methods:{
			goDetail() {
      			
	      		
    		}
		},
		components: {
		    'v-main':ServerPartShop
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	.SERVERPART{
		ul{
			li{
				margin-bottom: 20px;
			}
		}
	}
</style>