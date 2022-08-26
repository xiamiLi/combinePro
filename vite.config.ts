import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'
const pathResolve = (dir: string) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteCompression()],
  build: {
    minify: 'terser',
    outDir: 'dist/web-frame', // Specify the packaging path, which defaults to the dist directory in the project root
    terserOptions: {
      compress: {
        keep_infinity: true, // Prevents Infinity from being compressed to 1/0, which can cause performance issues on Chrome
        drop_console: true, // Console is removed from the production environment
        drop_debugger: true // The production environment removes the debugger
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'), // 设置 `@` 指向 `src` 目录
      views: pathResolve('./src/views'),
      components: pathResolve('./src/components'),
      assets: pathResolve('./src/assets')
    }
  },
  server: {
    port: 4300
  },
  
  // base: './', // 设置公共基础路径
  // server: {
  //   port: 4000, // 设置服务启动端口号
  //   open: true, // 设置服务启动时是否自动打开浏览器
  //   cors: true, // 允许跨域

  //   // 设置代理，根据我们项目实际情况配置
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:8000',
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: path => path.replace(/^/api/, '')
  //     }
  //   }
  // }
})
