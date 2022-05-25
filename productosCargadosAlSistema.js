let productos = [];

//Productos cargados en el sistema de Ecommerce
productos = [
		//tecnología
	{
		categoriaProducto: "tecnologias",
		nombreProducto: "Ihpone Negro",
		marcaProducto: "Ihpone",
		precioProducto: "150.999",
		modeloProducto:"MODELO: 12 Pro 500gb/A",
		envioProducto:"Envio Gratis",
		estadoProducto:"Nuevo",
        imagen:"img/iphone.jpg",
		idProducto:1
	},
	{
		categoriaProducto: "tecnologias",
		nombreProducto: "Ihpone Blanco",
		marcaProducto: "Ihpone",
		precioProducto: "190.857",
		modeloProducto:"MODELO: 13 Plus",
		envioProducto:"Envio Gratis",
		estadoProducto:"",
        imagen:"img/iphone2.jpg",
		idProducto:2
	},
	{
		categoriaProducto: "tecnologias",
		nombreProducto: "Tablet Xiaomi",
		marcaProducto: "Xiaomi",
		precioProducto: "60.989",
		modeloProducto:"MODELO XCJDQ 9 Gen",
		envioProducto:"Envio Gratis",
		estadoProducto:"Sin Stock",
        imagen:"img/tablet2.jpg",
		idProducto:3
	},
	{
		categoriaProducto: "tecnologias",
		nombreProducto: "Notebook ThinkPad",
		marcaProducto: "Lenovo",
		precioProducto: "150.000",
		modeloProducto:"MODELO T490",
		envioProducto:"",
		estadoProducto:"Nuevo",
        imagen:"img/notebook.jpg",
		idProducto:4
	},
	{
		categoriaProducto: "tecnologias",
		nombreProducto: "Tablet Xiaomi v2",
		marcaProducto: "Xiaomi",
		precioProducto: "79.000",
		modeloProducto:"Modelo OSLOAMOQW",
		envioProducto:"Envio Gratis",
		estadoProducto:"Nuevo",
        imagen:"img/tablet4.jpg",
		idProducto:5
	},
	{
		categoriaProducto: "tecnologias",
		nombreProducto: "Mouse Gaming",
		marcaProducto: "Genius",
		precioProducto: "59.000",
		modeloProducto:"Modelo AHNOHSAN Pro",
		envioProducto:"Envio Gratis",
		estadoProducto:"Sin Stock",
        imagen:"img/mouseGamer2.jpg",
		idProducto:6
	},
	{
		categoriaProducto: "tecnologias",
		nombreProducto: "Tablet samsung",
		marcaProducto: "Samsung",
		precioProducto: "49.000",
		modeloProducto:"Modelo EHOOQWHWQ",
		envioProducto:"Envio Gratis",
		estadoProducto:"",
        imagen:"img/tablet3.jpg",
		idProducto:7
	},
	{
		categoriaProducto: "tecnologias",
		nombreProducto: "Iphone Pro",
		marcaProducto: "Ihpone",
		precioProducto: "199.000",
		modeloProducto:"Modelo: 15 PLus",
		envioProducto:"Envio Gratis",
		estadoProducto:"",
        imagen:"img/iphone2.jpg",
		idProducto:8
	},
		// Electrodomésticos
	{
		categoriaProducto: "electrodomesticos",
		nombreProducto: "Smart TV Curvo",
		marcaProducto: "LG",
		precioProducto: "81.999",
		modeloProducto:"MODELO: MME73AM/A",
		envioProducto:"",
		estadoProducto:"Nuevo",
        imagen:"img/smartv2.png",
		idProducto:9
	},
	{
		categoriaProducto: "electrodomesticos",
		nombreProducto: "Smart TV TCL",
		marcaProducto: "Samsung",
		precioProducto: "55.857",
		modeloProducto:"MODELO: TCL MOHSON",
		envioProducto:"Envio Gratis",
		estadoProducto:"",
        imagen:"img/smartv.png",
		idProducto:10
	},
	{
		categoriaProducto: "electrodomesticos",
		nombreProducto: "Ventilador Pro",
		marcaProducto: "Philips",
		precioProducto: "5480",
		modeloProducto:"Modelo OASHNIQW",
		envioProducto:"Envio Gratis",
		estadoProducto:"Nuevo",
        imagen:"img/Ventilador2.jpg",
		idProducto:11
	},
	{
		categoriaProducto: "electrodomesticos",
		nombreProducto: "Heladera Smart",
		marcaProducto: "Philips",
		precioProducto: "180.000",
		modeloProducto:"Modelo IOJSOM Pro",
		envioProducto:"Envio Gratis",
		estadoProducto:"",
        imagen:"img/heladeraInteligente.jpg",
		idProducto:12
	},
	{
		categoriaProducto: "electrodomesticos",
		nombreProducto: "Cocina hogar",
		marcaProducto: "Whirlpool",
		precioProducto: "77.000",
		modeloProducto:"Modelo OHOQDMOWDQ",
		envioProducto:"Envio Gratis",
		estadoProducto:"Sin Stock",
        imagen:"img/cocina.png",
		idProducto:13
	},
	{
		categoriaProducto: "electrodomesticos",
		nombreProducto: "Batidora Pro",
		marcaProducto: "Braum",
		precioProducto: "39.000",
		modeloProducto:"Planetaria 2 Lts",
		envioProducto:"",
		estadoProducto:"Nuevo",
        imagen:"img/batidora.jpg",
		idProducto:14
	},
	{
		categoriaProducto: "electrodomesticos",
		nombreProducto: "Paba Electronica",
		marcaProducto: "Braum",
		precioProducto: "39.000",
		modeloProducto:"Planet Pink 2Lt.",
		envioProducto:"Envio Gratis",
		estadoProducto:"",
        imagen:"img/batidora2.jpg",
		idProducto:15
	},
	{
		categoriaProducto: "electrodomesticos",
		nombreProducto: "Freidora Smart",
		marcaProducto: "Mc Donalls",
		precioProducto: "49.000",
		modeloProducto:"Modelo EHOOQWHWQ",
		envioProducto:"Envio Gratis",
		estadoProducto:"Sin Stock",
        imagen:"img/freidora.jpg",
		idProducto:16
	},
		
		//Accesorios
	{
		categoriaProducto: "accesorios",
		nombreProducto: "Auriculares Beats",
		marcaProducto: "Beats",
		precioProducto: "15.999",
		modeloProducto:"MODELO: MME73AM/A",
		envioProducto:"Envio Gratis",
		estadoProducto:"Nuevo",
        imagen:"img/Auriculares3.jpg",
		idProducto:17
	},
	{
		categoriaProducto: "accesorios",
		nombreProducto: "Funda Cargador",
		marcaProducto: "Ihpone",
		precioProducto: "29.857",
		modeloProducto:"Cargador 7 Plus: Red",
		envioProducto:"Envio Gratis",
		estadoProducto:"Nuevo",
        imagen:"img/protector ihpone.jpg",
		idProducto:18
	},
	{
		categoriaProducto: "accesorios",
		nombreProducto: "Microfono Pro",
		marcaProducto: "Philips",
		precioProducto: "30.989",
		modeloProducto:"Microfono Pro Black",
		envioProducto:"",
		estadoProducto:"",
        imagen:"img/microfono.jpg",
		idProducto:19
	},
	{
		categoriaProducto: "accesorios",
		nombreProducto: "Airucuales Beats",
		marcaProducto: "Beats",
		precioProducto: "15.100",
		modeloProducto:"MODELO: XIASNUQ",
		envioProducto:"Envio Gratis",
		estadoProducto:"Sin Stock",
        imagen:"img/auriculares2.jpg",
		idProducto:20
	},
	{
		categoriaProducto: "accesorios",
		nombreProducto: "Cable USB",
		marcaProducto: "Xiaomi",
		precioProducto: "799",
		modeloProducto:"MODELO: TipoResorte",
		envioProducto:"",
		estadoProducto:"Nuevo",
        imagen:"img/cableUsb.jpg",
		idProducto:21
	},
	{
		categoriaProducto: "accesorios",
		nombreProducto: "Silla Gamer Violet",
		marcaProducto: "Game Open",
		precioProducto: "79.000",
		modeloProducto:"MODELO: XMZQEE",
		envioProducto:"",
		estadoProducto:"Nuevo",
        imagen:"img/silla2.jpg",
		idProducto:22
	},
	{
		categoriaProducto: "accesorios",
		nombreProducto: "Silla Rose Gamming",
		marcaProducto: "Samsung",
		precioProducto: "69.000",
		modeloProducto:"MODELO: CMQAAA",
		envioProducto:"Envio Gratis",
		estadoProducto:"Sin Stock",
        imagen:"img/silla.jpg",
		idProducto:23
	},
	{
		categoriaProducto: "accesorios",
		nombreProducto: "Reloj Dama Smart",
		marcaProducto: "Ihpone",
		precioProducto: "29.000",
		modeloProducto:"MODELO: XAHIQ",
		envioProducto:"",
		estadoProducto:"Nuevo",
        imagen:"img/reloj.jpg",
		idProducto:24
	},
	{
		categoriaProducto: "accesorios",
		nombreProducto: "Reloj Hombre Smart",
		marcaProducto: "Ihpone",
		precioProducto: "39.000",
		modeloProducto:"MODELO: RGXAHIQ",
		envioProducto:"Envio Gratis",
		estadoProducto:"Sin Stock",
        imagen:"img/reloj2.jpg",
		idProducto:25
	}
]
// AÑADO LOS PRODUCTOS DEL COMERCIO AL LOCAL STORAGE
localStorage.setItem("productos",JSON.stringify(productos)); 