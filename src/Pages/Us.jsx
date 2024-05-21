import Section from '../components/Section'
import Container from '../components/Container'
import { motion} from "framer-motion";
const parts=["قسم البرمجيات","قسم التصميم والغرافيكس","قسم المونتاج والموشن غرافيك","قسم التسوقي الرقمي","قسم الدعم التقني"]

export default function Us() {
    return (
         <Section id='us' >
      
       
        <Container type="col">
        
          <h1 className='text-3xl text-yellow-500 font-bold'>من نحن</h1>
          <h2 className='text-2xl px-6'>iCAN |Technical Solutions</h2>
          <h2 className='text-2xl  text-center leading-relaxed px-6'>
<span className='py-6 block'> للاستشارات والحلول البرمجية والتقنية وكل ما يتعلق بتكنولوجيا المعلومات والاتصالات</span>
<span className='block font-bold text-yellow-500 text-right'>للشركة 5 اقسام رئيسية وهي :</span>
</h2>

<ul className='shadow-xl bg-yellow-50   shadow-yellow-200'>
{parts.map((part,index)=> 
  <motion.div  key={index} animate={{ y: 0,opacity: 1  }}  initial={{ y: 100,opacity: 0 }} transition={{ ease: "easeOut", duration: 1}}>
<li className='text-center my-2 w-full text-yellow-500 bg-white px-6 py-4 rounded-md ' >{part}</li>
</motion.div>)
}

</ul>
<p className='py-10 text-center font-semibold leading-loose  px-16'> إلى كافة الفعاليات المختلفة مثل أصحاب (البنوك والمصارف - المطاعم والكافيهات - الفنادق- المشافي -  نقاط البيع والمولات والسوبر ماركت- محلات التجارية من البسة واحذية وهدايا وعطور وزهور  وحلويات والكترونيات ومفروشات - صالونات ومراكز التجميل و المكياج - محلات المجوهرات والذهب - النوادي الرياضية - المكاتب السياحية والسفر والشحن - العقارات والمقاولات  - مكاتب السيارات - المعاهد والمدارس والجامعات - العيادات و الصيدليات والمخابر والمراكز الطبية والتجميلية - خدمات البيع - خدمات التوصيل الدلفري - المعامل والمصانع - المكتبات ودار النشر - برامج المحاسبة - شركات الاستيراد والتصدير - تسيير واتمتة المعاملات - المحامين والقضاة والاطباء والمهندسين - الدفع الالكتروني - محطات البانزين- وكافة المهن العامة و الخاصة والنقابات المهنية وجميع المديريات و المؤسسات والشركات الحكومية والخاصة وكافة الفعاليات مهما كان اختصاصها) .

جاهزون لتصميم وبرمجة برامج ويندز وتطبيقات الاندرويد و الايفون بالاضافة لمواقع الويب لإدارة عملكم بشكل سلس ومريح و كامل وبما يغطي كافة تفاصيل العمل وتسهيل التواصل مع العملاء بشكل احترافي وفق تصماميم مميزة وسهلة الاستخدام.
وجاهزون ايضا لكافة تصاميم الغرافيك وعمل المونتاج من اجل نجاح شركاتكم وعرض منتجاتكم كافة بكل دقة واحترافية من اجل ارضائكم بالاضافة للتسويق لها رقميا بكافة طرق التسويق الرقمي .</p>
         
        </Container>
  
      </Section>
    )
}
