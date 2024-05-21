

/* eslint-disable react/prop-types */
const style={
    col:"flex   flex-col md:gap-[2rem] gap-[5rem] items-center md:px-24 h-full justify-normal     lg:px-40",
    row:"flex   sm:pl-12 sm:pr-6 items-center md:px-24  justify-center sm:justify-between   lg:px-40"
}
export default function Container({children,type}) {
    return (
        <container className={style[type]}>
            {children}
         
        </container>
    )
}
