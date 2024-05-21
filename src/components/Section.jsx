/* eslint-disable react/prop-types */
export default function Section({children,id}) {

return (

<section id={id} className="relative  overflow-hidden   justify-center  md:pt-[5rem] md:pb-0 py-[4rem] isolate   flex flex-col    min-h-[calc(100vh-0.01rem)]  lg:px-8">

{children}

</section>

)}
