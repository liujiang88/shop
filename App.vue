<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {font-family: "iconfont";
	  src: url('~@/static/font/iconfont.eot?t=1595680888788'); /* IE9 */
	  src: url('~@/static/font/iconfont.eot?t=1595680888788#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUgAAsAAAAADXAAAATSAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDGgqNdIpeATYCJAMUCwwABCAFhG0HeRsDC8gOJQUFBoXNEGBB8DzlVe9X2JVGehaSMgviBPsK8qT+Ma/vjfvtfHNBXasUg2Q2ky7YruQjeCNPu4eb8cd+rk77Fpq+efu3HtQF8esLmcR1EU2Q8VKgNG+VyjEMz3AhTcDlEECTmQZcNWuPngwCJkQhsGJgP10CwWLEDCAKrsb2ONREFoOFq+a4bwGLlLeXjxQXARSWAblS095DVOj/pvabeob9P6CjYUOQnR24HQUGUBDABGnv6WyJR5MXVJTay+klb7DChP43IxIJCTNUWFkBdCqM5P88G6IMQ3xVvUk3iTgXAm+GcaHgzXA7Bh0qguKJobSkeg0UBVRLNH1zxruDJjVxOAV8NyOlmRAmNt/10hlNPVSgqJvllBv/o8LehMu3syn7xKpTLgmj8Chv3kn7RLx+lvCVO9mdw6/qjDt6Oo8dpyr0sev5svtGdTiRNbsrvYQhetWRzJTYa7JSeauP56QR59TU2O65JyA7ftgjuye6I2P8I8dygbjsuh72X8wp53SCZwhKlrYPPK/pF67uVJi8Rzp8XuJtvVIgzBDCBeyc9i/uASasXQmrV2ShtsW3ZYtzrC1vzZaU+tipbNm+ffVWIEjludZdWX0pj4R5212SvJ1UcrU+rbYGW1Zlt96WsqW8rI9lr1yb02b7vFa+gw7x1Ttdydm9t83N7LllddaKPr2SrfbOjlUnoF2wffXpae23GWrZC70iP+Kv2mafTIgZdE7NMeB11JpLV7ob9vi6w31iNC1jPCqizAQ2QbAOLLHT+A73zc0l9E1dYjPehXPCi2nOuS5ng8Roegu6nm1pqsWT4xXPRuLqIk9gXfRVJCljUuR76D2qnAWqVMEuXNa5GcQ3Puicg7K/NJcPhhoqKayAFjTzjbN5J6okAKE4l6VmoUWMJrSgP7J//21BoftfpF0pFW7Zi6EF6rNIXbc6dW1heORxN39yygb/3dhdZ0Zgca/C6T4XfZyucBWzzV4SuDu4a6V/Ap9HHVg3OM2uNDUPL1iy5NDG9pAnR6lcJQ+sv5Pl+YDcPMejw7FafsafV1Nnpl75sPX1hpPOfxvby/1Ih+jtDyoenCKX/Eymd6zdHGrPUuOzIoACj6bWQRdjtbIOSZEC7Rda9Am+QqruLS+BACT+JgITIzhiN+ND0doKXVJ6/xa81TbycGC9WYo0Wim4KIgsOj7lZiaivXIGiNkyV+4ezo+EFMDiDKm3VYBGAwnA3iTeZGNJRZZ2wbWIbqBwyAQGLjnRJr4gWHiUBBuXKqApwLCjPVLA8CBmCMjPUgCCz3lQRDkLBj4P0Cb+NVik5i3Y+OIBTWvJOKVHbjH1oOFY4lhF8mxkKpRozMLj1cqJWLfCEjNLFNJUzGJmBLUWLmrPDMMEsyz2iM3Q2zjXkMZoBA0FV8PhMEVRRoNY4U0G59GezUV6e+3ZpNAIxFMDBkaCS6wqCJnZSBMFCkEbzYl3vP5EMDoWYSRYwMAPcioYRgxz6YhWmmiJgB6mJJEGVqU+xgx02uDIroF4nEGJaOqh2I4J0yQFEfXeKAhGgdOEkSAepSfNaCYtqrKpeHVkHIvOFEPJ+7FEiSGmWGKTorspUVUiqkn0OYYZobJEMp06TuURs830d80cy7CSlG6m7sdEn353SAAAAA==') format('woff2'),
	  url('~@/static/font/iconfont.woff?t=1595680888788') format('woff'),
	  url('~@/static/font/iconfont.ttf?t=1595680888788') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('~@/static/font/iconfont.svg?t=1595680888788#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-biaodandingzhimoban:before {
	  content: "\e646";
	}
	
	.icon-biaodandingzhitongyi:before {
	  content: "\e647";
	}
	
	.icon-biaodandingzhizuhu:before {
	  content: "\e648";
	}
	
	.icon-caizhengquhua:before {
	  content: "\e649";
	}
	
	
</style>
