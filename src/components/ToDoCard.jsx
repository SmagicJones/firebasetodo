import image from "../assets/image.jpg";

export const ToDoCard = ({ details, notes, done }) => {
  return (
    <div className="p-2 max-w-5xl grid gap-4">
      <div className="p-2 h-16 bg-blue-500 rounded-lg drop-shadow-lg">
        <h6 className="text-2xl font-extrabold">{details}</h6>
        <p className="font-normal">{notes}</p>
      </div>
    </div>
  );
  // <div className="max-w-sm w-full lg:max-w-full lg:flex">
  //   <div
  //     // className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
  //     className='h-56 grid grid-cols-3 content-start'
  //     style={{backgroundImage: `url(${image})`}}
  //     title="Woman holding a mug"
  //   ></div>
  //   <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
  //     <div className="mb-8">
  //       <div className="text-gray-900 font-bold text-xl mb-2">
  //         {details}
  //       </div>
  //       <p className="text-gray-700 text-base">
  //         {notes}
  //       </p>
  //     </div>
  //     <div className="flex items-center">
  //       {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/> */}
  //       {/* <div className="text-sm">
  //         <p className="text-gray-900 leading-none">Jonathan Reinink</p>
  //         <p className="text-gray-600">{}</p>
  //       </div> */}
  //     </div>
  //   </div>
  // </div>
  //   );
  //   return (
  //     <>

  //       <h2 style={{color: done ?  "green" : "red"}}>{details}</h2>
  //       <p>{notes}</p>
  //     </>
  //   );
};
