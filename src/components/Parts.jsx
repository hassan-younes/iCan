/* eslint-disable react/prop-types */

import { Button } from "./ui/button"

export default  function Parts({index}) {
    const data=[
    {
        header:"قسم البرمجيات  :",
        body:["برامج windows","مواقع الكترونية"]

    },
    {
        header:"قسم التصميم والغرافيكس :",
        body:["عروض تقديمية","اعلانات طرقية","سير ذاتية", "انشاء وتصميم هويات بصرية"]

    },
    {
        header:"قسم تحرير الفيديوهات والموشن غرافيك :",
        body:["انشاء فيديوهات تعليمية","انشاء فيديوهات تصويرية","انشاء فيديوهات رسومية متحركة","انشاء فيديوهات رقمية"]
    },
    {
        header:"قسم التسويق الرقمي :",
        body:["انشاء فيديوهات تعليمية","انشاء فيديوهات تصويرية","انشاء فيديوهات رسومية متحركة","انشاء فيديوهات رقمية"]
    },
    {
        header:"قسم الدعم الفني:",
        body:["انشاء فيديوهات تعليمية","انشاء فيديوهات تصويرية","انشاء فيديوهات رسومية متحركة","انشاء فيديوهات رقمية"]
    },

]
    return (
        <div  className={`w-full rounded-xl  relative h-full `}>
            <img src={`${index}.jpg`}  className="absolute rounded-xl w-full h-full z-0 object-cover object-center  "  alt="" />
           <div className="flex  rounded-xl flex-col z-10 justify-around items-center  w-full text-white backdrop-blur-[1px] h-full bg-gradient-to-b from-[#2b2b2be3] to-[#6868689d]">

      <Part data={data} i={index} />
            
        </div>
        </div>
    )
}
function Part({i,data}){
    console.log(i)
    return(
       <div dir="rtl" className="flex flex-col items-center justify-around h-full ">

            <h1  className="md:text-xl text-lg px-3 py-2  text-yellow-500 font-bold ">{data[i].header}</h1>
            <ul className="text-center text-white flex flex-col space-y-2 md:text-lg text-md">
             
{data[i].body.map((item,index)=><i className="px-3 py-1 rounded-full " key={index}>{item}</i>)}
              
            </ul>
            <Button className="w-44" size="sm" >المزيد</Button>
</div>          
    )
}