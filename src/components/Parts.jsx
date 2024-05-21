/* eslint-disable react/prop-types */

import { Button } from "./ui/button"

export default  function Parts({index}) {
    const data=[
    {
        header:"قسم البرمجيات ويضم :",
        body:["برامج windows","مواقع الكترونية"]

    },
    {
        header:"قسم التصميم والغرافيكس ويضم:",
        body:["عروض تقديمية","اعلانات طرقية","سير ذاتية", "انشاء وتصميم هويات بصرية"]

    },
    {
        header:"قسم تحرير الفيديوهات والموشن غرافيك ويضم:",
        body:["انشاء فيديوهات تعليمية","انشاء فيديوهات تصويرية","انشاء فيديوهات رسومية متحركة","انشاء فيديوهات رقمية"]
    },
    {
        header:"قسم التسويق الرقمي ويضم:",
        body:["انشاء فيديوهات تعليمية","انشاء فيديوهات تصويرية","انشاء فيديوهات رسومية متحركة","انشاء فيديوهات رقمية"]
    },
    {
        header:"قسم تحرير الفيديوهات والموشن غرافيك ويضم:",
        body:["انشاء فيديوهات تعليمية","انشاء فيديوهات تصويرية","انشاء فيديوهات رسومية متحركة","انشاء فيديوهات رقمية"]
    },

]
    return (
        <div  className={`w-full rounded-xl  relative h-full `}>
            <img src={`${index}.jpg`}  className="absolute w-full z-0 object-cover object-center  "  alt="" />
           <div className="flex  rounded-xl flex-col z-10 justify-around items-center  w-full text-white backdrop-blur-[1px] h-full bg-gradient-to-b from-[#2c2c2cb0] to-[#353535a1]">

      <Part data={data} i={index} />
            
        </div>
        </div>
    )
}
function Part({i,data}){
    console.log(i)
    return(
       <div dir="rtl" className="flex flex-col items-center justify-around h-full ">

            <h1  className="text-xl bg-black px-3 py-2 rounded-sm text-yellow-500 font-bold ">{data[i].header}</h1>
            <ul className="text-center text-black flex flex-col space-y-2 text-lg">
             
{data[i].body.map((item,index)=><i className="px-3 py-1 rounded-full bg-[#ecead7ee]" key={index}>{item}</i>)}
              
            </ul>
            <Button className="w-44" size="sm" >المزيد</Button>
</div>          
    )
}