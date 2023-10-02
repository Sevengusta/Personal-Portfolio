

const Input = () => {

  return (
    <div
          className="
              mt-5
              w-full
              items-center
            "
        >
          <div className="relative ">
            <input
              autoComplete="off"
              id="name"
              name="name"
              type="text"
              className="
                peer
                w-full
                bg-gray-600 
                placeholder:text-white 
                text-orange-500
                border-b-2
                focus:outline-none
                focus:border-b-2 
                focus:border-orange-500
                transition-colors
                duration-500
                placeholder-transparent
                "
                placeholder=""
              required
            />
            <label 
              className="
                pl-1
                absolute 
                left-0 
                -top-6
                text-sm 
                transition-all
                text-white
                peer-placeholder-shown:text-white
                peer-placeholder-shown:top-0
                peer-placeholder-shown:text-base
                peer-focus:text-top 
                peer-focus:-top-6
                peer-focus:text-orange-500
                peer-focus:text-sm
              ">
                Nome
            </label>



          </div>
        </div>
  )
}

export default Input