import {baseUrl} from './config.js'

export function topList(){
	
	
	let listIds=['19723756' , '3779629' , '2884035' , '3778678']
	return new Promise(function(reslove,reject){
		uni.request({
			url:`${baseUrl}/toplist/detail`,
			method:'GET',
			data:{},
			success:res=>{
				let result=res.data.list
				result.length=4
				for (let i;i<result.length;i++) {
					result[i].listId=listIds[i]
				}
				// console.log(res);
				reslove(result);
			},
			fail:()=>{},
			complete: () => {
				
			}
		})
	})
	
}

export function list(listId){
	return uni.request({
		url:`${baseUrl}/playlist/detail?id=${listId}`,
		method:'GET'
	})
}

//获取歌曲封面接口
//http://localhost:3000/song/detail?ids=1839480696
export function songDetail(songId){
	return uni.request({
		url:`${baseUrl}/song/detail?ids=${songId}`,
		method:'GET'
	})
}

//相似歌曲
//http://localhost:3000/simi/song?id=1839480696
export function songSimi(songId){
	return uni.request({
		url:`${baseUrl}/simi/song?id=${songId}`,
		method:'GET'
	})
}

//评论
//http://localhost:3000/comment/music?id=1839480696
export function songComment(songId){
	return uni.request({
		url:`${baseUrl}/comment/music?id=${songId}`,
		method:'GET'
	})
}


//歌词
//http://localhost:3000/lyric?id=1839480696
export function songLyric(songId){
	return uni.request({
		url:`${baseUrl}/lyric?id=${songId}`,
		method:'GET'
	})
}

//歌曲地址
//http://localhost:3000/song/url?id=1839480696
export function songUrl(songId){
	return uni.request({
		url:`${baseUrl}/song/url?id=${songId}`,
		method:'GET'
	})
}

//热词接口
//http://localhost:3000/search/hot/detail
export function searchHot(){
	return uni.request({
		url:`${baseUrl}/search/hot/detail`,
		method:'GET'
	})
}


//搜索结果接口
//http://localhost:3000/search?keywords=少年
export function searchWord(word){
	return uni.request({
		url:`${baseUrl}/search?keywords=${word}`,
		method:'GET'
	})
}


//输入时的提示词接口
//http://localhost:3000/search/suggest?keywords=少年&type=mobile
export function searchSuggest(word){
	return uni.request({
		url:`${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method:'GET'
	})
}