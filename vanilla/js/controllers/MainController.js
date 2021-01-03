import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'
import HistoryModel from '../models/HistoryModel.js'

const tag = '[MainController]'

export default{
    init(){
        console.log(tag, 'init()')
        FormView.setup(document.querySelector('form'))

        //@submit 이벤트가 발생했을 때 onSubmit함수 호출
        .on('@submit', e => this.onSubmit(e.detail.input))
        .on('@reset', () => this.onReset())

        ResultView.setup(document.querySelector('#search-result'))

        TabView.setup(document.querySelector('#tabs'))
        .on('@tabClick', e => this.onClickTab(e.detail.tabName))

        this.selectedTab = '추천 검색어'
        this.renderView()
    },

    onClickTab(tabName){
        if(tabName === '추천 검색어'){
            
        }else if(tabName === '최근 검색어'){

        }
        debugger
    },

    renderView(){
        console.log('renderView()')
        TabView.setActiveTab(this.selectedTab)
        ResultView.hide()
    },

    search(query){
        console.log(tag, 'search()', query)
        SearchModel.list(query).then(data=>{
            this.onSearchResult(data)
        })
    },

    onSubmit(input){
        console.log(tag, 'onSubmit()', input)
        this.search(input)
    },

    onReset(){
        console.log(tag, 'onReset()')
        ResultView.hide()
    },

    onSearchResult(data){
        ResultView.render(data)
    }
}