import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 为何不走main.ts, 来到vite编译工程化
// npm i vite-plugin-vue-setup-extend -D  还在开发阶段 工程化
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 如果放在 main.ts里  更改代码会 热更新、重新编译
// element-plus 应该 单独打包、单独编译 缓存
// 框架应该单独打包  =》 开发时候的打包速度、上线时候的更新大小
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	optimizeDeps: {
		include: ['schart.js']
	}
});
