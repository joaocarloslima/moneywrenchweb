export default function InputText({label, register=()=>{}, name, ...props}){
    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">{label}</label>
            <input {...register(name)} type="text" {...props} className="bg-slate-800 px-2 py-1 rounded"/>
        </div>

    )
}