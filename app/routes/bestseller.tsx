import { useState } from "react";
const todos =[
    {
        id: '1',
        title :'ราชันชาติอสูร',
        author:'Kanekiru Kogitsune',
        cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202211/567273/1000257152_front_XXL.jpg?imgname=Re:Monster-%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%B1%E0%B8%99%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%AD%E0%B8%AA%E0%B8%B9%E0%B8%A3-%E0%B8%A5.1-%E0%B8%89.%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99-(",
        category:'หการ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
        description:'     หลังจากเสียชีวิตอย่างไรวาสนาเมื่อโลกก่อน ก็อบโร่ได้พบว่าตัวเองกลับมาเกิดใหม่เป็นก็อบลินสุดอ่อนแต่ว่าด้วยสกิล แอบเซอร์ชั่น (การดูดกลืน) ที่ยิ่งกินเท่าไหร่ก็ยิ่งแข็งแกร่งขึ้น ทำให้เกิดการ "วิวัฒนาการ" ที่ไม่ปกติเพียงไม่นานก็อบโร่ก็ได้ขึ้นเป็นผู้ปกครองเผ่าในที่สุด...!?การผจญภัยเพื่อเอาชีวิตรอดของสัตว์เล็กผู้ยิ่งใหญ่ ในโลกซึ่งเต็มไปด้วยเหล่าสัตว์ประหลาดสุดแกร่งได้เริ่มต้นขึ้นแล้ว',
        Sale:'85.50 บาท',
        url:'https://www.naiin.com/product/detail/567273',
        Bestseller: true,
        Suggestions:false
        
      
    },
    {
        id: '2',
        title :'เมื่อผู้กล้าลาโลกแล้ว ',
        author:' SUBARUICHI',
        cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202301/570334/1000258262_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%A5%E0%B8%B2%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%A5.11-%E0%B8%89.%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99",
        category:' การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
        description:'พวกยูนะพยายามหนีออกจากปราสาทของกองทัพราชอาณาจักรโรเซเลีย ทว่าต้องมีอันได้ประมือกับบรรดาหัวหน้ากองพลของกองทัพราชอาณาจักร!! ยูนะหมดสภาพต่อสู้ด้วยพิษ ส่วนมาร์เกอริทถูกทางเลือกบีบคั้นหัวใจระหว่างจะเป็นเชลยหรือตาย...!! และแล้ว ในที่สุดไคล์ก็บินได้ กลายเป็นพระเจ้า...!!? อีกด้านหนึ่ง พวกโทวกะต้องท้าทาย “เล็กซ์บอส” บอสที่แข็งแกร่งที่สุดในเขาวงกตเพื่อช่วยเหลืออันริให้จงได้!!',
        price:'85.50 บาท',
        url:'https://www.naiin.com/product/detail/570334',
        Bestseller:true,
        Suggestions:false
        
    },
    {
        id: '3',
        title :'เกิดชาตินี้พี่ต้องเทพ',
        author:'Yuka Fujikawa (ยูกะ ฟุจิคาวะ)',
        cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202308/586305/1000263469_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%94%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E-%E0%B8%A5.18-%E0%B8%89.%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99",
        category:' การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
        description:'นานะโฮชิอยู่ตัวคนเดียวมาตลอด”รูเดียสสนุกกับชีวิตข้าวใหม่ปลามันกับซิลฟี วันหนึ่งพอไปห้องวิจัยเพื่อช่วยงานนานะโฮชิซึ่งกำลังวิจัยเวทมนตร์วาร์ป เธอก็เอาวงเวทขนาดใหญ่กว่าปกติมาให้ ถึงอย่างนั้น ผลลัพธ์กลับตรงข้ามกับที่นานะโฮชิคาดว่าเป็นผลงานที่ตัวเองมั่นใจ การทดลองล้มเหลวโดยไม่ได้อะไร นานะโฮชิใช้เวลาหกปีทำการวิจัย แต่ไม่ได้อะไรสักอย่างจนช็อกล้มพับไป...!?                                                                                                                                                 ',
        price:'85.50 บาท',
        url:'https://www.naiin.com/product/detail/562606',
        Bestseller:true,
        Suggestions:false
    },
    {
      id: '4',
      title :'เมื่อผู้กล้าลาโลกแล้ว',
      author:'SUBARUICHI',
      cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202208/557355/1000253240_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%A5%E0%B8%B2%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%A5.10-%E0%B8%89.%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99",
      category:'การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
      description:'“ตอนเห็นผังบ้านครั้งแรก ผมคิดว่าบ้านหลังนี้แปลกมาก”‘ฉัน’ เป็นนักเขียนอิสระที่เชี่ยวชาญเรื่องลี้ลับ คนรู้จักนำผังบ้านหลังหนึ่งมาให้ฉันดูโดยบอกว่าบ้านนั้นมี ‘พื้นที่ปริศนา’ อันลึกลับอยู่ฉันลองไปขอความคิดเห็นจากนักออกแบบบ้านชื่อคุณคุริฮาระแล้วเขาก็เริ่มชี้ให้เห็นความประหลาดของบ้านหลังนั้นจุดแล้วจุดเล่า…!!',
      price:'85.50 บาท',
      url:'https://www.naiin.com/product/detail/557355',
      Bestseller:false,
      Suggestions:true
  },
  {
    id: '5',
    title :'บริษัท จัดหาความตาย ไม่จำกัด',
    author:' เท็น ฟุรุตะ',
    cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202407/617816/1000273672_front_XXL.jpg?imgname=%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97-%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%95%E0%B8%B2%E0%B8%A2-%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94",
    category:'วรรณกรรม , เรื่องสั้น',
    description:' คนบางคนมีชีวิตอยู่ได้ด้วยความตายของใครอีกคน คนบางคนยึดเอาความตายเป็นคุณค่าสุดท้ายของชีวิต ทว่าบางคนกลับไม่มีแม้แต่โอกาสจะเลือกวิธีตายให้ตัวเอง ไม่ว่าจะ เมเนเจอร์ชายผู้ตกเป็นจำเลยสังคมข้อหาเป็นตัวการให้ลูกจ้างต้องปลิดชีวิต หญิงกำพร้าผู้ตกหลุมรักนักโทษชายและพร้อมจะตายเพื่อเขา เศรษฐีนักสะสมผีเสื้อหายากผู้ต้องการหาผู้สืบทอด ชายเจ้าของร้านกินดื่มผู้หวังฆ่าตัวตายเอาเงินประกัน และหญิงสาวผู้ถูกกดขี่จนตกเป็นเหยื่อของผู้แข็งแกร่ง ห้างหุ้นส่วนจำกัดซันสึพร้อมมอบบริการช่วยเหลือหากท่านฆ่าตัวตายไม่ลง',
    price:'346.75 บาท',
    url:'https://www.naiin.com/product/detail/617816',
    Bestseller:false,
    Suggestions:true  
}
  
];

function CheckBestsell ({Bestseller}){
  if(Bestseller)
      return (
     <>
       <h1 className="text-red-900 font-bold text-5xl mb-2 text-center">สินค้าน่าสนใจ!!!</h1> 
       </>
     );
  else
      return(
     <>

       </>
     ); 
}
function CheckSuggestions ({Suggestions}){
  if(Suggestions)
      return (
     <>
        <h1 className="text-green-500 font-bold text-5xl mb-2 text-center">สินค้าหน้าติดตาม!!!</h1> 
       </>
     );
  else
      return(
     <>

       </>
     ); 
}

function Items({id,title,author,cover,category,description,price,url,Bestseller,Suggestions}:{ id:string,
    title:String,author:String,cover:String,category:String,description:String,price:String,url:String,Bestseller:Boolean,Suggestions:Boolean}){
    console.log("Key:",id);
    const [like,setLike] = useState(false);

    function handleClickLike(){
        if(like)
            setLike(false);
        else
            setLike(true);
    }
        return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <CheckBestsell Bestseller={Bestseller} />
        <CheckSuggestions Suggestions={Suggestions} />
      </p>
      
      <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
      <h1>{author}</h1>
      <img className="w-100 h-300" src={cover} />
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    
  </div>
</div>

    )
}


export default function ToDoLists(){
    const enrIitems = todos.filter(subject =>
            subject.Suggestions===true||
            subject.Suggestions===false
            
    );
    const items = enrIitems.map(Bookitem =>
    <Items id={Bookitem.id} title ={Bookitem.title} author={Bookitem.author} cover={Bookitem.cover} category={Bookitem.category} description={Bookitem.description} price={Bookitem.price} url={Bookitem.url} Bestseller={Bookitem.Bestseller} Suggestions={Bookitem.Suggestions}/>
    );

    return(
        <div className="p-5  bg-red-500">
        <center><h1 className="text-xl font-bold">หนังสือที่น่าติดตาม</h1></center>
        <ul>{items}</ul>
        </div>
    )
}