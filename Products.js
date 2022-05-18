class Producto{
    constructor(id,categoria,modelo,equipamiento,precio,stock,cantidad){
        this.id=id;
        this.categoria=categoria;
        this.modelo=modelo;
        this.equipamiento=equipamiento;
        this.precio=precio;
        this.stock=stock;
        this.cantidad= cantidad || 0
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------PRODUCTOS----------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------BICICLETAS----------------------------------------------------------------------------------------//
const prod1 = new Producto(1,"Bicicletas MTB","Cube Aim 29'","Shimano Deore XT 20 2x10", 1830, 4);     
const prod2 = new Producto(2,"Bicicletas MTB","Cube Attention 29'","Shimano Deore XT 30 3x9", 1650, 5);
const prod3 = new Producto(3,"Bicicletas MTB","Cube Reaction 29'","Shimano XTR 30 1x12", 2060, 3);     
const prod4 = new Producto(4,"Bicicletas MTB","Cube Shadow 29'","Shimano Deore XT 30 3x9", 1240, 2);   
const prod5 = new Producto(5,"Bicicletas MTB","Cube Action 29'", "Shimano XTR 30 1x12" , 2100,6);       
const prod6 = new Producto(6,"Bicicletas MTB","Cube Slyer 29'", "Shimano XT 10 1x10" , 1970,6)         
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//--------------------------------------------------------REPUESTOS----------------------------------------------------------------------------------------//
const prod101 = new Producto(101,"REPUESTOS","SHIMANO","Deore XT 30 3x9", 500, 5);
const prod102 = new Producto(102,"REPUESTOS","SHIMANO","Deore XT 20 2x10", 300, 4);
const prod103 = new Producto(103,"REPUESTOS","SHIMANO","XTR 30 1x12", 450, 3);      
const prod104 = new Producto(104,"REPUESTOS","SHIMANO","Deore XT 30 3x9", 350, 2);   
const prod105 = new Producto(105,"REPUESTOS","SHIMANO", "XTR 30 1x12" , 520,6);        
const prod106 = new Producto(106,"REPUESTOS","SHIMANO", "XT 10 1x10" , 510,6);  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//--------------------------------------------------------ACCESORIOS----------------------------------------------------------------------------------------//
const prod1001 = new Producto(1001,"ACCESORIOS","SHIMANO","Deore XT 30 3x9", 500, 5);
const prod1002 = new Producto(1002,"ACCESORIOS","SHIMANO","Deore XT 20 2x10", 300, 4);
const prod1003 = new Producto(1003,"ACCESORIOS","SHIMANO","XTR 30 1x12", 450, 3);      
const prod1004 = new Producto(1004,"ACCESORIOS","SHIMANO","Deore XT 30 3x9", 350, 2);   
const prod1005 = new Producto(1005,"ACCESORIOS","SHIMANO", "XTR 30 1x12" , 520,6);        
const prod1006 = new Producto(1006,"ACCESORIOS","SHIMANO", "XT 10 1x10" , 510,6);    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//--------------------------------------------------------INDUMENTARIA----------------------------------------------------------------------------------------//
const prod10001 = new Producto(10001,"INDUMENTARIA","SHIMANO","Deore XT 30 3x9", 500, 5);
const prod10002 = new Producto(10002,"INDUMENTARIA","SHIMANO","Deore XT 20 2x10", 300, 4);
const prod10003 = new Producto(10003,"INDUMENTARIA","SHIMANO","XTR 30 1x12", 450, 3);      
const prod10004 = new Producto(10004,"INDUMENTARIA","SHIMANO","Deore XT 30 3x9", 350, 2);   
const prod10005 = new Producto(10005,"INDUMENTARIA","SHIMANO", "XTR 30 1x12" , 520,6);        
const prod10006 = new Producto(10006,"INDUMENTARIA","SHIMANO", "XT 10 1x10" , 510,6);      
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------ARRAY DE PRODUCTOS EN PANTALLA----------------------------------------------------------------------------//
const productos =[
//---------------------------------------------------BICICLETAS EN PANTALLA----------------------------------------------------------------------------------------//
prod1,prod2,prod3,prod4, prod5,prod6,
//---------------------------------------------------REPUESTOS EN PANTALLA----------------------------------------------------------------------------------------//
prod101, prod102, prod103, prod104, prod105, prod106,
//---------------------------------------------------ACCESORIOS EN PANTALLA----------------------------------------------------------------------------------------//
prod1001, prod1002, prod1003, prod1004, prod1005, prod1006,
//---------------------------------------------------INDUMENTARIA EN PANTALLA----------------------------------------------------------------------------------------//
prod10001, prod10002, prod10003, prod10004, prod10005, prod10006,
];
