import React, {PureComponent} from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import List from "../../components/List/List"
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"
import ListItem from "../../components/ListItem/ListItem"
import "./Sales.css";


export default class Sales extends PureComponent{
     state={
          store:{
               name:"Shops at East Peidmont",
               address: " 230 E. Peiedmont Ave",
               city:"Norcross",
               state:"GA",
               zip:"30010",
               phone:"(770) 876-2201"
          },
          purchasedItems:[
               {"currentQty":4,"criticalQty":10,"alertStatus":true,"_id":"5cb31f21ef86d68b5e0dc67d","name":"Diet Coke","description":"2L bottle","upc":"1111111","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":7,"criticalQty":10,"alertStatus":true,"_id":"5cb33340ef86d68b5e0dcbbf","name":"Red Bull","upc":"23455","description":"8 oz can","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":10,"criticalQty":10,"alertStatus":true,"_id":"5cb33cf7ef86d68b5e0dce44","name":"Chex Mix","upc":"23455","description":"4 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":14,"criticalQty":10,"alertStatus":true,"_id":"5cb33d14ef86d68b5e0dce4e","name":"Prune Juice","upc":"23455","description":"64 oz bottle","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3429def86d68b5e0dcfd3","name":"Bud Light","upc":"23455","description":"6 pack","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":3,"criticalQty":4,"alertStatus":true,"_id":"5cb3c7cdef86d68b5e0df779","name":"Jack Lins Beef Jerky","upc":"2455","description":"2.85 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":15,"criticalQty":10,"alertStatus":true,"_id":"5cb3c847ef86d68b5e0df79c","name":"Blueberry Pop Tarts","upc":"2455","description":"8 count box","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3c873ef86d68b5e0df7aa","name":"Kraft Easy Mac Original Flavor Macaroni & Cheese","upc":"2455","description":"2.05 Ounce Microwavable Cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":15,"criticalQty":10,"alertStatus":true,"_id":"5cb3c8d5ef86d68b5e0df7c9","name":"Bizzy Cold Brew Coffee","upc":"2455","description":"16 ox bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":8,"criticalQty":10,"alertStatus":true,"_id":"5cb3c90def86d68b5e0df7da","name":"Dole Bowls, Cherry Mixed in 100% Fruit Juice","upc":"2455","description":"4px 4 oz cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":4,"criticalQty":10,"alertStatus":true,"_id":"5cb31f21ef86d68b5e0dc67d","name":"Diet Coke","description":"2L bottle","upc":"1111111","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":7,"criticalQty":10,"alertStatus":true,"_id":"5cb33340ef86d68b5e0dcbbf","name":"Red Bull","upc":"23455","description":"8 oz can","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":10,"criticalQty":10,"alertStatus":true,"_id":"5cb33cf7ef86d68b5e0dce44","name":"Chex Mix","upc":"23455","description":"4 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":14,"criticalQty":10,"alertStatus":true,"_id":"5cb33d14ef86d68b5e0dce4e","name":"Prune Juice","upc":"23455","description":"64 oz bottle","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3429def86d68b5e0dcfd3","name":"Bud Light","upc":"23455","description":"6 pack","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":3,"criticalQty":4,"alertStatus":true,"_id":"5cb3c7cdef86d68b5e0df779","name":"Jack Lins Beef Jerky","upc":"2455","description":"2.85 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":15,"criticalQty":10,"alertStatus":true,"_id":"5cb3c847ef86d68b5e0df79c","name":"Blueberry Pop Tarts","upc":"2455","description":"8 count box","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3c873ef86d68b5e0df7aa","name":"Kraft Easy Mac Original Flavor Macaroni & Cheese","upc":"2455","description":"2.05 Ounce Microwavable Cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":15,"criticalQty":10,"alertStatus":true,"_id":"5cb3c8d5ef86d68b5e0df7c9","name":"Bizzy Cold Brew Coffee","upc":"2455","description":"16 ox bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":8,"criticalQty":10,"alertStatus":true,"_id":"5cb3c90def86d68b5e0df7da","name":"Dole Bowls, Cherry Mixed in 100% Fruit Juice","upc":"2455","description":"4px 4 oz cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":4,"criticalQty":10,"alertStatus":true,"_id":"5cb31f21ef86d68b5e0dc67d","name":"Diet Coke","description":"2L bottle","upc":"1111111","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":7,"criticalQty":10,"alertStatus":true,"_id":"5cb33340ef86d68b5e0dcbbf","name":"Red Bull","upc":"23455","description":"8 oz can","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":10,"criticalQty":10,"alertStatus":true,"_id":"5cb33cf7ef86d68b5e0dce44","name":"Chex Mix","upc":"23455","description":"4 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":14,"criticalQty":10,"alertStatus":true,"_id":"5cb33d14ef86d68b5e0dce4e","name":"Prune Juice","upc":"23455","description":"64 oz bottle","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3429def86d68b5e0dcfd3","name":"Bud Light","upc":"23455","description":"6 pack","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":3,"criticalQty":4,"alertStatus":true,"_id":"5cb3c7cdef86d68b5e0df779","name":"Jack Lins Beef Jerky","upc":"2455","description":"2.85 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":15,"criticalQty":10,"alertStatus":true,"_id":"5cb3c847ef86d68b5e0df79c","name":"Blueberry Pop Tarts","upc":"2455","description":"8 count box","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3c873ef86d68b5e0df7aa","name":"Kraft Easy Mac Original Flavor Macaroni & Cheese","upc":"2455","description":"2.05 Ounce Microwavable Cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":15,"criticalQty":10,"alertStatus":true,"_id":"5cb3c8d5ef86d68b5e0df7c9","name":"Bizzy Cold Brew Coffee","upc":"2455","description":"16 ox bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":8,"criticalQty":10,"alertStatus":true,"_id":"5cb3c90def86d68b5e0df7da","name":"Dole Bowls, Cherry Mixed in 100% Fruit Juice","upc":"2455","description":"4px 4 oz cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":4,"criticalQty":10,"alertStatus":true,"_id":"5cb31f21ef86d68b5e0dc67d","name":"Diet Coke","description":"2L bottle","upc":"1111111","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":7,"criticalQty":10,"alertStatus":true,"_id":"5cb33340ef86d68b5e0dcbbf","name":"Red Bull","upc":"23455","description":"8 oz can","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":10,"criticalQty":10,"alertStatus":true,"_id":"5cb33cf7ef86d68b5e0dce44","name":"Chex Mix","upc":"23455","description":"4 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":14,"criticalQty":10,"alertStatus":true,"_id":"5cb33d14ef86d68b5e0dce4e","name":"Prune Juice","upc":"23455","description":"64 oz bottle","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3429def86d68b5e0dcfd3","name":"Bud Light","upc":"23455","description":"6 pack","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":3,"criticalQty":4,"alertStatus":true,"_id":"5cb3c7cdef86d68b5e0df779","name":"Jack Lins Beef Jerky","upc":"2455","description":"2.85 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":15,"criticalQty":10,"alertStatus":true,"_id":"5cb3c847ef86d68b5e0df79c","name":"Blueberry Pop Tarts","upc":"2455","description":"8 count box","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3c873ef86d68b5e0df7aa","name":"Kraft Easy Mac Original Flavor Macaroni & Cheese","upc":"2455","description":"2.05 Ounce Microwavable Cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":15,"criticalQty":10,"alertStatus":true,"_id":"5cb3c8d5ef86d68b5e0df7c9","name":"Bizzy Cold Brew Coffee","upc":"2455","description":"16 ox bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
               {"currentQty":8,"criticalQty":10,"alertStatus":true,"_id":"5cb3c90def86d68b5e0df7da","name":"Dole Bowls, Cherry Mixed in 100% Fruit Juice","upc":"2455","description":"4px 4 oz cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0}

          ] 
     }
     createPdf = () => {
          const {vfs} = pdfFonts.pdfMake;
          pdfMake.vfs = vfs;
          const storeName = this.state.store.name;
          const address = this.state.store.address;
          const city = this.state.store.city + ", "+ this.state.store.state + " " +this.state.store.zip;

          const documentDefinition = {
               pageSize: {width: 250, height:"auto"},
               pageOrientation: 'portrait',
               content: [
                    {
                         image: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTFFODBFMjVGREUxMUU5OTM5MEU0QUI1M0EwNTFBNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTFFODBFMzVGREUxMUU5OTM5MEU0QUI1M0EwNTFBNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBMUU4MEUwNUZERTExRTk5MzkwRTRBQjUzQTA1MUE2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBMUU4MEUxNUZERTExRTk5MzkwRTRBQjUzQTA1MUE2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAEAsLCwwLEAwMEBcPDQ8X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",
                         width: 175,
                         
                    },
                    {
                         text: storeName,
                         alignment:"center"
                    },
                    {
                         text: address,
                         alignment:"center"
                    },
                    {
                         text: city,
                         alignment:"center"
                    },
                    {
                         text: this.state.store.phone,
                         alignment:"center",
                         margin: [0,0,0,30]
                    },
                    [
                         this.state.purchasedItems.map(item => {
                              return item.name;
                         })
                    ] ,
                    {
                         text: new Date().toLocaleDateString() + " "+ new Date().toLocaleTimeString(navigator.language, {
                              hour: '2-digit',
                              minute:'2-digit'
                            }),
                         alignment:"left",
                         margin: [0,30,0,30]
                    }                  
               ],
               styles: {
                    header: {
                         bold: true,
                         fontSize: 18,
                         marginBottom: 24
                    }
               }
          };
          pdfMake.createPdf(documentDefinition).open();
     }
     dateFormat = () => {
          let val =  new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          console.group(val)
          return "Sales: " + val;
     }
     render(){
          return(
               <>
                    <PageHeader title={this.dateFormat()} isRed="true"/>
                    <div className="container px-0 w-100 pb-5 " >
                         <div className="mx-auto col-12 col-lg-8 col-md-8 col-sm-10 col-xl-7 px-0 salesTable">
                              <button className="btn red darken-2 m-3" onClick={() => this.createPdf()}>Finish Sale</button>
                              <List>
                                       {this.state.purchasedItems.map(item => {
                                            return <ListItem>{item.name}</ListItem>
                                       })}             
                              </List>
                              <button className="btn red darken-2 mb-5 mt-0" onClick={() => this.createPdf()}>Finish Sale</button>
                         </div>
                    </div>
                    <BottomBar/>
               </>
          );

     }
}