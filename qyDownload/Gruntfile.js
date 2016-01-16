module.exports=function(grunt){
    require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	
    grunt.initConfig({
	    pack:grunt.file.readJSON('package.json'),
		//拷贝目录/文件
		copy:{
			html:{
				files:[{
                  expand:true,
                  src:['index.html','!node_modules','!*.js'],
                  dest:'public'
				}]
			},
			images:{
				files:[{
				  	expand:true,
				  	src:'style/images/*',
				  	dest:'public/'
				}]
			},
			js:{
				files:[{
				  	expand:true,
				  	cwd:'style/',
				  	src:'*.js',
				  	dest:'public/style/'
				}]
			},
			css:{
				files:[{
				  	expand:true,
				  	cwd:'style/',
				  	src:'*.css',
				  	dest:'public/style/'
				}]
			}
		},
		//合并文件
		/**concat:{
			css:{
				src:'style/*.css',
				dest:'public/style/style.min.css'
			},
			js:{
				src:'style/*.js',
				dest:'public/js/app.min.js'
			}

		},**/
		//图片压缩
		imagemin: {
		    dynamic: {
		        options: {
		            optimizationLevel: 3 // png图片优化水平，3是默认值，取值区间0-7
		        },
		        files: [
		            {
		                expand: true, // 开启动态扩展
		                cwd: "public/images/", // 当前工作路径
		                src: ["*.{png,jpg,gif}"], // 要出处理的文件格式(images下的所有png,jpg,gif)
		                dest: "public/style/images/" // 输出目录(直接覆盖原图)
		            }
		        ]
		    }
		},
		//合并压缩js
		uglify:{
		   bulid:{
		   	files:[{
                expand: true, // 开启动态扩展
                cwd: "public/style/", // 当前工作路径
                src: '*.js', // 要出处理的文件格式(images下的所有png,jpg,gif)
                dest: "public/style/" // 输出目录(直接覆盖原图)
		   	}]
		   }
		},
		//压缩css
		cssmin:{
			css:{	
				files:{
					'public/style/style.css':'public/style/style.css',
					'public/style/jquery.fullPage.css':'public/style/jquery.fullPage.css'
				}
			}
		},
		//清楚
		clean:{
		    src:['public/*','public/*.*'],
		},
		 // 处理html中css、js 引入合并问题
	    usemin: {
            css:{
                files:{
                    src:['public/style/*.css']
                }
            },
            js:['public/style/*.js'],
            html:['public/*.html'],
	    },
	    //添加时间戳
	    rev: {
		    options: {
		      encoding: 'utf8',
		      algorithm: 'md5',
		      length: 4
		    },
		    assets: {
		      files: [{
		        src: [
		          'public/style/images/*.{jpg,jpeg,gif,png}',
		          'public/style/*.js',
		          'public/style/*.css'
		        ]
		      }]
		    }
		},
        //压缩html页面
	    htmlmin:{
		    dist: {
		        options: {
		          removeComments: false,
		          collapseWhitespace: true
		        },
		        files: {
		          'public/index.html': 'public/index.html'
		        }
		    }
	    },
	    watch: {
            files: [  //下面文件的改变就会实时刷新网页
                'public/*.html',
                'public/style/{,*/}*.css',
                'public/style/{,*/}*.js',
                'public/images/{,*/}*.{png,jpg,gif}'
            ]
        },
	    //静态文件服务器
	    connect:{
			 options: {
			        port: 9000,
			        hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
			        livereload: 35729  //声明给 watch 监听的端口
			  },
			  server: {
			        options: {
			          open: true, //自动打开网页 http://
			          base:'public'  //主目录
			        }
			  }
	    }

	})


    // Default task(s)
    grunt.registerTask('mian', ['clean','copy','uglify','cssmin','rev','usemin','htmlmin']);
    grunt.registerTask('default', ['mian','connect:server','watch']);
};