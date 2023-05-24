const { default: dynamic } = require("next/dynamic");


export default dynamic(() => import('./bootstrap'), {ssr: false})