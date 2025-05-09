
const SkillCards = ({image, name} : {image:string, name:string}) => {
  return (
    <div className="border rounded-2xl w-30 h-40 m-2 flex bg-[#121212]  flex-col p-2 drop-shadow-[0_0_6px_rgba(100,100,0,0.5)] hover:drop-shadow-[0_0_6px_rgba(250,250,250,1)] justify-between">
        <img src={image} alt="" className="p-2"/>
        <p className="text-center font-semibold fill-white">{name}</p>
    </div>
  )
}

export default SkillCards