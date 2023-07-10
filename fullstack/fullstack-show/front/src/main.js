import { createApp } from 'vue'
// 一切静态资源皆可打包
import './assets/main.css'
import App from './App.vue'

import 'lib-flexible/flexible'

import router from './router'

import {createPinia} from 'pinia'  //use(createPinia())即得到一个仓库

import {  Overlay,PullRefresh ,Cell,Switch ,Popup ,Area ,AddressEdit ,AddressList ,ContactCard ,TreeSelect ,Divider,SubmitBar,Stepper,SwipeCell,Checkbox, CheckboxGroup,Card,ActionBar, ActionBarIcon, ActionBarButton,Tabbar, TabbarItem,Swipe, SwipeItem,Search,Icon ,Button,Form, Field, CellGroup,NavBar } from 'vant';
import 'vant/lib/index.css';

createApp(App).use(createPinia()).use(Overlay).use(PullRefresh).use(Cell).use(Switch).use(Popup).use(Area).use(AddressEdit).use(AddressList).use(ContactCard).use(TreeSelect).use(Divider).use(SubmitBar).use(Stepper).use(SwipeCell).use(Checkbox).use(CheckboxGroup).use(Card).use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Search).use(NavBar).use(Form).use(Field).use(CellGroup).use(Icon).use(Button).use(router).mount('#app')
