
//  demo du lieu config
var config = [
  {
    key: 1,
    hoten: "Nguyễn Thị Hà Giang Sơn",
    chucvu: "Giám Đốc",
    khoaphong: "Phòng Hồi sức tích cực chống độc A (ICU)",
    parent: 0
  },
  
  {
    key: 11,
    hoten: "Nguyễn Văn A",
    chucvu: "Thư Ký Giám Đốc",
    khoaphong: "Phòng Ngoại Chấn thương chỉnh hình",
    parent: 1
  },
  
  {
    key: 12,
    hoten: "Nguyễn Văn A",
    chucvu: "Thư Ký Giám Đốc",
    khoaphong: "Phòng Ngoại Chấn thương chỉnh hình",
    parent: 1
  },
  
  {
    key: 111,
    hoten: "Nguyễn Văn A",
    chucvu: "Phụ trách Triển khai Bộ tiêu chí chất lượng bệnh viện",
    khoaphong: "Phòng Ngoại Chấn thương chỉnh hình",
    parent: 11
  },
  
  {
    key: 112,
    hoten: "Nguyễn Văn A",
    chucvu: "Trưởng Phòng",
    khoaphong: "Phòng Tổ chức cán bộ",
    parent: 11
  },
  
  {
    key: 113,
    hoten: "Nguyễn Văn A",
    chucvu: "Phó Trưởng Phòng",
    khoaphong: "Phòng Tổ chức cán bộ",
    parent: 11
  },
  
  {
    key: 121,
    hoten: "Nguyễn Văn A",
    chucvu: "Điều dưỡng trưởng bệnh viện",
    khoaphong: "Phòng Tổ chức cán bộ",
    parent: 12
  },
  
  {
    key: 122,
    hoten: "Nguyễn Văn A",
    chucvu: "Tổ Trưởng Tổ thiết bị công nghệ thông tin",
    khoaphong: "Phòng Tổ chức cán bộ",
    parent: 12
  }, 
  {
    key: 1211,
    hoten: "Nguyễn Văn A",
    chucvu: "Trưởng Phòng",
    khoaphong: "Phòng Tổ chức cán bộ",
    parent: 121
  },
    {
    key: 1213,
    hoten: "Nguyễn Văn A",
    chucvu: "Nhân Viên",
    khoaphong: "Phòng Tổ chức cán bộ",
    parent: 121
  },
   {
    key: 1231,
    hoten: "Nguyễn Văn A",
    chucvu: "Nhân Viên",
    khoaphong: "Phòng Tổ chức cán bộ",
    parent: 122
  },
   {
    key: 12311,
    hoten: "Nguyễn Văn A",
    chucvu: "Nhân Viên",
    khoaphong: "Phòng Tổ chức cán bộ",
    parent: 1231
  },
   {
    key: 123,
    hoten: "Nguyễn Văn A",
    chucvu: "Trưởng Phòng",
    khoaphong: "Phòng Tổ chức cán bộ",
    parent: 1231
  },

  {
    key: 123	,
    hoten: "Nguyễn Văn A",
    chucvu: "Nhân Viên",
    khoaphong: "Phòng Tổ chức cán bộ",
    parent: 12
  },
  {
    key: 13,
    hoten: "Nguyễn Văn A",
    chucvu: "Trưởng Phòng",
    khoaphong: "Phòng Tổ chức cán bộ",
    parent: 1
  },
  
];

function Node(ct, x, y, scale) {
  //this.width = 280*scale;
  //this.height = 100*scale;
  this.x = x;
  this.y = y;
  this.nodeWidth = 250*scale;
  this.padding = 3;
  //this.font_scale = 15*scale;
  
  this.draw_node = function () {
    //width = 200*scale;
    //height = 100*scale;
    //Ve hinh chu nhat
    ct.beginPath();
    ct.fillStyle = "#d9edf7";
    ct.fillRect(50*scale + this.x, 0*scale + this.y, 200*scale, 100*scale);
    // Ve hinh tron
    ct.arc(50*scale + this.x, 50*scale + this.y, 50*scale, 0, Math.PI*2);
    ct.fillStyle = "rgb(217, 237, 247)"; //"lightblue";
    ct.strokeStyle = "#7EB8C9";
    ct.lineWidth = 3;
	ct.save();
    ct.shadowBlur=3;
	ct.shadowOffsetX=1;
	ct.shadowColor="rgb(126, 184, 201)";//#7EB8C9";
    ct.stroke();
    ct.fill();
    //ct.closePath();
    ct.restore();
    ct.save();
    ct.shadowBlur=5;
	ct.shadowOffsetX=3;
	ct.shadowColor="rgba(126, 184, 201, 0.5)";
    //ct.stroke();
    ct.fill();
    ct.closePath();
    ct.restore();

    /*ct.fillStyle = "#7EB8C9";
    ct.arc(50*scale + this.x, 50*scale + this.y, 50*scale, Math.PI*3/2, Math.PI/2);
    ct.stroke();
    ct.fill();*/
    
    /*var img = new Image();
    img.src = "../htm/dog.jpg";
    window.onload = function () {
    	
    	ct.arc(50*scale + this.x, 50*scale + this.y, 50*scale, 0, 2*Math.PI);
    	console.log("x: " + 50*scale + this.x);
    	ct.stroke();
    	ct.save();
    	ct.clip();
	    ct.drawImage(img, 0 + this.x, 0 + this.y);
    	ct.restore();
    }*/

    

    this.firstPointX = 125*scale + this.x;
    this.firstPointY = 100*scale + this.y;
    this.lastPointX = 125*scale + this.x;
    this.lastPointY = 0 + this.y;
  }
  
  this.link_to = function (node_arr) {
    for (i in node_arr) {
      ct.beginPath();
      ct.moveTo(this.firstPointX, this.firstPointY);
      ct.lineTo(node_arr[i].lastPointX, node_arr[i].lastPointY - 5);
      ct.strokeStyle = "grey";
      ct.lineWidth = 2;
      ct.stroke();
    }
  }
  
  this.draw_text1 = function (ct, text) {
    var text_width, text_inline = "";
    ct.font = "bold " + 17*scale + "px Helvetica";
    ct.fillStyle = "#31708f";
    ct.textAlign = "center";
    ct.textBaseline= "middle";
    text_width = ct.measureText(text).width;
    //var max_length_inline = parseInt(50/(text_width/text.length));
    //var count_line = text.length/max_length_inline;
    //console.log(count_line);
    //if(count_line > parseInt(count_line)) count_line++;
    var arr_word = text.split(" ");
    var arr_inline = [];
    var index = 0;
    //var i = 0;
    if (text_width > 100*scale - this.padding) {
      for (var i = 0; i < arr_word.length; i++) {
        //text_inline = text_inline + " " + arr[i];
        if (ct.measureText(text_inline + " " + arr_word[i]).width <= 100*scale - this.padding) {
            text_inline = text_inline + " " + arr_word[i];
            if(i == arr_word.length - 1) {
              //console.log(text_inline.trim());
              //ct.fillText(text_inline.trim(), 150, 50 + 10 * ++index);
              arr_inline.push(text_inline.trim());
            }
          continue;
        }
        else {
          //console.log(text_inline.trim());
          arr_inline.push(text_inline.trim());
          text_inline= "";
          i--;
        }
      }
      
    } else {
      ct.fillText(text, 50*scale + this.x, 50*scale + this.y);
    }

    if (arr_inline.length > 3) {
    	arr_inline[2]  = arr_inline[2].slice(0, -3) + "...";
    	for (i = 0; i < 3; i++) {
	      ct.fillText(arr_inline[i], 50*scale + this.x, 50*scale + y - 20*scale*(3-1)/2 + 20*scale*i);
	    }
    } else {
    	for (i in arr_inline) {
	      ct.fillText(arr_inline[i], 50*scale + this.x, 50*scale + y - 20*scale*(arr_inline.length-1)/2 + 20*scale*i);
	    }
    }
    
  }
  this.draw_text2 = function (ct, text) {
  	ct.font = "bold " +  16*scale + "px Helvetica";
    //ct.fillText(text, 175*scale + this.x, 50*scale +this.y);
    this.text_wrap (ct, text, 25);
  }

  this.draw_text3 = function (ct, text) {
  	ct.fillStyle = "#8C8C8C";
  	ct.font = "" +  16*scale + "px Helvetica";
  	this.text_wrap(ct, text, 70);
  }

  this.draw_text = function (ct, text1, text2) {
  	var j = 0;
  	var arr1, arr2;	
  	//console.log(arr1);
  	//console.log(arr2);
  	ct.fillStyle = "#8C8C8C";
  	ct.font = "" +  16*scale + "px Verdana";
  	arr2 = this.text_wrap(ct, text2, 0);

  	ct.fillStyle = "#31708f";
  	ct.font = "bold " +  16*scale + "px Arial";
  	arr1 = this.text_wrap(ct, text1, 0);

  	
  	//var arr_inline = arr1.concat(arr2);
  	for (var i in arr1) {
	    ct.fillText(arr1[i], 175*scale + this.x, 50*scale + y - 18*scale*(arr1.length+arr2.length-1)/2 + 18*scale*j++);
	}

	ct.fillStyle = "#8C8C8C";
  	ct.font = "" +  15*scale + "px Verdana";

	for (var i in arr2) {
	    ct.fillText(arr2[i], 175*scale + this.x, 50*scale + y - 16*scale*(arr1.length+arr2.length-1)/2 + 16*scale*j++);
	}
  }
  this.text_wrap = function (ct, text, height) {
	  var arr_word = text.split(" ");
	  var arr_inline = [];
	  var index = 0;
	  var text_width, text_inline = "";
	  
	  ct.textAlign = "center";
	  ct.textBaseline= "middle";
	  //ct.font = "" +  16*scale + "px Helvetica";
	  //ct.font = "bold " + 17*scale + "px Arial";
	  
	  text_width = ct.measureText(text).width;
	  if (text_width > 150*scale - this.padding) {
	      for (var i = 0; i < arr_word.length; i++) {
	        //text_inline = text_inline + " " + arr[i];
	        if (ct.measureText(text_inline + " " + arr_word[i]).width <= 150*scale - this.padding) {
	            text_inline = text_inline + " " + arr_word[i];
	            if(i == arr_word.length - 1) {
	              //console.log(text_inline.trim());
	              //ct.fillText(text_inline.trim(), 150, 50 + 10 * ++index);
	              arr_inline.push(text_inline.trim());
	            }
	          continue;
	        }
	        else {
	          //console.log(text_inline.trim());
	          arr_inline.push(text_inline.trim());
	          text_inline= "";
	          i--;
	        }
	      }
	      
	    } else {
	      //ct.fillText(text, 175*scale + this.x, height*scale + y);
	      arr_inline.push(text);
	      return arr_inline;
	    }
	    //console.log("111111" + arr_inline.length);
	    return arr_inline;
	    for (i in arr_inline) {
	      ct.fillText(arr_inline[i], 175*scale + this.x, height*scale + y - 16*scale*(arr_inline.length-1)/2 + 16*scale*i);
	    }
	}
}

function Hinhthoi (ct, x, y, scale) {
  this.firstPointX = 100*scale + x;
  this.firstPointY = 100*scale + y;
  this.lastPointX = 100*scale + x;
  this.lastPointY = 0 + y;
  ct.beginPath();
  ct.fillStyle = "lightblue";
  ct.moveTo(0 + x, 50*scale + y);
  ct.lineTo(100*scale + x, 0 + y);
  ct.lineTo(200*scale + x, 50*scale + y);
  ct.lineTo(100*scale + x, 100*scale + y);
  ct.lineTo(0 + x, 50*scale + y);
  ct.stroke();
  ct.fill();
}


function HCN_bogoc (ct, x, y, width, height) {
  this.firstPointX = width/2 + x;
  this.firstPointY = height + y;
  this.lastPointX = width/2 + x;
  this.lastPointY = 0 + y;
  var radius = 5;
  ct.beginPath();
  ct.moveTo(radius + x, 0 + y);
  ct.lineTo(width - radius + x, 0 + y);
  ct.arcTo(width + x, 0 + y, width + x, radius + y, radius);
  ct.lineTo(width + x, height - radius + y);
  ct.arcTo(width + x, height + y, width - radius + x, height + y, radius);
  ct.lineTo(radius + x, height + y);
  ct.arcTo(0 + x, height + y, 0 + x, height - radius + y, radius);
  ct.lineTo(0 + x, radius + y);
  ct.arcTo(0 + x, 0 + y, radius + x, 0 + y, radius);
  ct.stroke();
  ct.fillStyle = "lightblue";
  ct.fill();
}

function HinhOval (ct, x, y, width, height) {
  this.firstPointX = width/2 + x;
  this.firstPointY = height + y;
  this.lastPointX = width/2 + x;
  this.lastPointY = 0 + y;
  ct.beginPath();

  ct.lineWidth = 1;
  //ct.strokeStyle = "black";
  ct.fillStyle = "lightblue";
    
  ct.moveTo(0 + x, height/2 + y);

  ct.bezierCurveTo(0 + x, 0 + y, width + x, 0 + y, width + x, 50 + y);

  ct.bezierCurveTo(width + x, height + y, 0 + x, height + y, 0 + x, height/2 + y);
  ct.stroke();
  ct.fill();
}



function text_wrap (ct, text, x, y, width, height) {
  var arr_word = text.split(" ");
  var arr_inline = [];
  var index = 0;
  var text_width, text_inline = "";
  ct.fillStyle = "black";
  ct.textAlign = "center";
  ct.textBaseline= "middle";
  ct.font = "bold 17px Arial";
  
  text_width = ct.measureText(text).width;
  if (text_width > width) {
      for (var i = 0; i < arr_word.length; i++) {
        //text_inline = text_inline + " " + arr[i];
        if (ct.measureText(text_inline + " " + arr_word[i]).width <= width) {
            text_inline = text_inline + " " + arr_word[i];
            if(i == arr_word.length - 1) {
              console.log(text_inline.trim());
              //ct.fillText(text_inline.trim(), 150, 50 + 10 * ++index);
              arr_inline.push(text_inline.trim());
            }
          continue;
        }
        else {
          console.log(text_inline.trim());
          arr_inline.push(text_inline.trim());
          text_inline= "";
          i--;
        }
      }
      
    } else {
      ct.fillText(text, width/2 + x, height/2 + y);
    }
    //console.log("111111" + arr_inline.length);
    for (i in arr_inline) {
      ct.fillText(arr_inline[i], width/2 + x, height/2 + y - 20*(arr_inline.length-1)/2 + 20*i);
    }
}
    //node1.draw_node();
    //node2.draw_node();
    //node3.draw_node();
    //node4.draw_node();
    //var hinhthoi1 = new Hinhthoi(ct,200, 200, 0.7);
    //var hcn = new HCN_bogoc(ct, 300, 350, 200, 50);
    //var oval = new HinhOval(ct, 50, 400,200,100);
    //link_to(node1, [node3, node2, node4, hinhthoi1, hcn, oval]);
    //text_wrap(ct, "nguyen van a nguyen van a a", 300, 350, 200, 50);
    
    
/*
config -> du lieu truyen vao
ct -> doi tuong getContext
canvas -> doi tuong canvas
x, y -> toa do so do
width, height -> rong, dai
*/
function Sodo (config, ct, canvas, x, y, width, height) {

				//  Khoi tao So do //
 	var scale = 0;
	var nodeWidth, nodeHeight, khoangcach;
	x+=5; y+=5; width-=5; height-=5;
	var config_xy = [];
	var elem;
	var root = make_tree([config[0]]);
	//console.log("docao: " + docao(root));
	//var arr = [1, [2,[3],[4],[4,[1],[1]]], [3,[4],[5]], [3,[4],[5]] ];
	nodeWidth = width/dem(root);
	scale = width/dem(root)/250;
	nodeHeight = 100*scale;
	khoangcach = (khoangcach = (height - nodeHeight)/(docao(root) - 1)) > nodeHeight? khoangcach : nodeHeight; 
	console.log(khoangcach);
	ct.lineCap = "round";
	vesodo(root, x, y, scale);
	
	elem = create_tooltip();
	canvas.addEventListener("click", show_tooltip);
	



	function make_tree (root) {
	  for (var i in config) {
		   //console.log(config[i].parent); 
		  if (config[i].parent == root[0].key) {
		     var temp = [config[i]];
		     root.push(make_tree(temp));
		  }
	  }
		  return root;
	}

	function dem (node) {
	  var i, n = 0;
	  if (node.length == 1) {
	    return 1;
	  }
	  for (i = 1; i < node.length; i++) {
	    n += dem(node[i]);
	  }
	  return n;
	}

	function docao (node) {
		var h_max = 0, h_temp;
		if (node.length == 1) {
			return 1;
		}
		for (var i = 1; i < node.length; i++) {
			h_temp = docao(node[i]);
			if (h_temp > h_max) {
				h_max = h_temp;
			}
		}
	return (h_max + 1);
	}

	function khoang_cach () {
		var k;
		var h = docao(root);
		if((k = (height - nodeHeight*h)/(h - 1)) > 0) {
			return k;
		}
		return 100;
	}

	function vesodo (root, x, y, scale) {
	  var n_parent = new Node(ct, 0, y, scale);
	  //console.log("y: " + y);
	  n_parent.x = x + nodeWidth*dem(root)/2 - nodeWidth/2;
	  n_parent.draw_node();

// tao mang du lieu voi toa do //
	  var conf = root[0];
	  conf.x = n_parent.x;
	  conf.y = n_parent.y;
	  config_xy.push(conf);

// set data //
	  n_parent.draw_text1(ct, root[0].chucvu);
	  n_parent.draw_text(ct, root[0].hoten, root[0].khoaphong);
	  if(root.length == 1) {
	    return n_parent;
	  }
	  for (var i = 1; i < root.length; i++) {
	    var n_child = vesodo(root[i], x, y + khoangcach, scale);
	    //console.log(typeof );
	    link_to(n_parent, [n_child]);
	    x = x + dem(root[i])*nodeWidth;
	    
	  }
	  return n_parent;
	}

	function link_to (node, node_arr) {
        for (var i in node_arr) {
          ct.beginPath();
          ct.moveTo(node.firstPointX, node.firstPointY);
          ct.lineTo(node_arr[i].lastPointX, node_arr[i].lastPointY);
          ct.strokeStyle = "#d1d1fc";//"#7EB8C9";	
          ct.lineWidth = 3;
          ct.stroke();
          ct.closePath();
        }
    }

    function show_tooltip (e) {
    	for (var i = 0; i < config_xy.length; i++) {
    		if ( config_xy[i].x < e.offsetX && e.offsetX < config_xy[i].x + nodeWidth 
    			&& config_xy[i].y < e.offsetY && e.offsetY < config_xy[i].y + nodeHeight) {
    			console.log(e.offsetX + " " + e.offsetY + " "+ i);
    			//console.log(arr);
    			elem[0].children[0].innerText = config_xy[i].hoten;
    			elem[0].children[1].innerText = config_xy[i].chucvu;
    			elem[0].children[2].innerText = config_xy[i].khoaphong;
    			elem.css({"visibility": "visible",
    					"left": e.pageX, 
    					"top": e.pageY});
    			break;
    		}
    	}
    	console.log(i + " " + config_xy.length);
    	if(i == config_xy.length) {
    		elem.css("visibility", "hidden");
    	}
    }

    function create_tooltip () {
    	//var elem = document.createElement("div");
    	var elem = $("<div></div>");
    	elem.attr("class", "canvas-tooltip");
    	elem.append("<div></div>", "<div></div>", "<div></div>");
    	$("body").append(elem);
    	elem[0].children[0].style.color = "#31708f";
    	elem[0].children[0].style["font-size"] = "12px";
    	elem[0].children[0].style["font-weight"] = "bold";
    	//elem[0].children[0].style.font-size = "12px";
    	return elem;
    }
}


//   chay thu so do
var ct = document.getElementById("demo").getContext("2d");
new Sodo(config, ct, document.getElementById("demo"), 300, 100, 1000, 1000);










