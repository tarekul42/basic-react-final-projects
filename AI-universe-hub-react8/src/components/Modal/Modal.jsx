import React from 'react';

// console.log(pricing.map(price => (console.log(price))));
// const {} = props.singleData.image_link;
// console.log(Object.values(features || {}));
const Modal = (props) => {
  const {description,image_link, features, pricing, integrations, accuracy, input_output_examples} = props.singleData;
  console.log(props.singleData);
    return (
        <div>
            {/* You can open the modal using ID.showModal() method */}
            <dialog id="my_modal_4" classNameName="modal w-9/12 relative">
            <form method="dialog" classNameName="modal-box">
            <div classNameName="modal-action">
                {/* if there is a button, it will close the modal */}
                <button
                className="btn btn-close bg-red-600 text-white p-4 rounded-full absolute -top-8 -right-8 hidden lg:block"
              >
                <span
                  className="material-symbols-outlined flex items-center justify-center h-8 w-8 lg:h-full w-full"
                >
                  close
                </span>
              </button>
                </div>
                {/* modal stated here */}
                <div className="grid sm:grid-rows-1 lg:grid-cols-2 gap-12 p-2 lg:p-4 justify-items-center">
                    <div className="rounded-lg border-2 border-red-200">
                    <div><h1 className="font-semibold text-base lg:text-2xl lg:p-4 p-2">{description}</h1></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 justify-items-center px-4 lg:py-2 text-center">
                      {
                        pricing?.map((productPrice) => (
                        <div className="py-4 px-2 border bg-white rounded-lg text-green-600 font-semibold text-xl lg:text-3xl">
                        <p>${productPrice? productPrice.price.replace(/(\/)/g, "/ "): "It's totally free!!!"}</p><p>${productPrice ? productPrice.plan : "Free!!!"}</p> </div>
                        ))
                      }
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-4 py-2">
                        <div><h1 className="font-semibold text-xl lg:text-2xl lg:p-4">Features</h1>
                <div className="ps-8 text-slate-200">
                  <ul>
                    {
                      Object.values(features || {})?.map(feature => (
                        <li className="list-disc">{feature.feature_name}</li>
                      ))
                    }
                    </ul>
                      </div>
              </div>
              <div>
                  <h1 className="font-semibold text-xl lg:text-2xl lg:p-4">Integration</h1>
            <div className="ps-8 text-slate-200">
                <ul>
                  {
                    integrations?.map(integration =>(

                      <li className="list-disc">{integration ? integration: "No Integration"}</li>
                    ))
                  }
                </ul>
            </div>
        </div>
    </div>
    </div>
    <div className="pb-2 relative row-start-1 lg:col-start-2">
    <img className="rounded-lg" src={image_link && image_link[0]} />
    <p className="text-white bg-red-500 absolute top-2 lg:top-4 right-2 lg:right-4 px-2 lg:p-2 rounded lg:rounded-lg">{(accuracy?.score * 100)} % accuracy</p>
    <div className="text-center lg:p-4">
    <h1 className="font-semibold text-base lg:text-2xl lg:p-4">{input_output_examples ? input_output_examples[0].input : "No input avilable now"}</h1>
    <p className="text-sm lg:text-xl text-slate-200 flex items-center">{input_output_examples ? input_output_examples[0].output : "No output avilable now"}</p>
    </div>
    </div>
    </div>
                
            </form>
            </dialog>
        </div>
    );
};

export default Modal;

/*
<div
      className="modal fade"
      id="displayDetails"
      tabindex="-1"
      aria-labelledby="displayDetailsLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl relative">
        <div className="modal-content">
          <div className="modal-body p-8">
            <div>
              <button
                id="displayDetailsLabel"
                type="button"
                className="btn-close bg-red-600 text-white p-4 rounded-full absolute -top-8 -right-8 hidden lg:block"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span
                  className="material-symbols-outlined flex items-center justify-center h-8 w-8 lg:h-full w-full"
                >
                  close
                </span>
              </button>
            </div>
            <div id="modal-container"></div>
          </div>
          <div className="modal-footer lg:hidden">
            <button type="button" className="btn" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
*/
/*
 <div className="grid sm:grid-rows-1 lg:grid-cols-2 gap-12 p-2 lg:p-4 justify-items-center">
    <div className="rounded-lg bg-red-50 border-2 border-red-200 w-fit">
    <div><h1 className="font-semibold text-base lg:text-2xl lg:p-4 p-2">${data.description}</h1></div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 justify-items-center px-4 lg:py-2 text-center">
        <div className="py-4 px-2 w-full border bg-white rounded-lg text-green-600 font-semibold text-xl lg:text-3xl">
        <p>${productPrice? productPrice[0].price.replace(/(\/)/g, "/ "): "It's totally free!!!"}</p><p>${productPrice ? productPrice[0].plan : "Free!!!"}</p> </div>
        <div className="py-4 px-2 w-full border bg-white rounded-lg text-yellow-500 font-semibold text-xl lg:text-3xl">
        <p>${productPrice? productPrice[1].price.replace(/(\/)/g, "/ "): "It's totally free!!!"}</p><p>${productPrice ? productPrice[1].plan : "Free!!!"}</p> </div>
        <div className="py-4 px-2 w-full border bg-white rounded-lg text-rose-500 font-semibold text-xl lg:text-3xl">
        <p>${productPrice ? productPrice[2].price : "Free!!!"}</p><p>${productPrice ? productPrice[2].plan : "Free!"}</p> </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-4 py-2">
        <div><h1 className="font-semibold text-xl lg:text-2xl lg:p-4">Features</h1>
                <div className="ps-8 text-slate-600"><ul>
                    <li className="list-disc">${data.features[1].feature_name}</li>
                    <li className="list-disc">${data.features[2].feature_name}</li>
                    <li className="list-disc">${data.features[3]
                      .feature_name}</li></ul>
                </div>
        </div>
        <div>
            <h1 className="font-semibold text-xl lg:text-2xl lg:p-4">Integration</h1>
            <div className="ps-8 text-slate-600">
                <ul>
                    <li className="list-disc">${data.integrations ? data.integrations[0]: "No Integration"}</li>
                    <li className="list-disc">${data.integrations ? data.integrations[1]: "No Integration"}</li>
                    <li className="list-disc">${data.integrations ? data.integrations[2]: "No Integration"}</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    <div className="pb-2 relative row-start-1 lg:col-start-2">
    <img className="rounded-lg" src="${data.image_link[0]}" />
    <p className="text-white bg-red-500 absolute top-2 lg:top-4 right-2 lg:right-4 px-2 lg:p-2 rounded lg:rounded-lg">${`${data
      .accuracy.score * 100}% accuracy`}</p>
    <div className="text-center lg:p-4">
    <h1 className="font-semibold text-base lg:text-2xl lg:p-4">${data.input_output_examples ? data.input_output_examples[0].input : "No input avilable now"}</h1>
    <p className="text-sm lg:text-xl text-slate-600 flex items-center">${data.input_output_examples ? data.input_output_examples[0].output : "No output avilable now"}</p>
    </div>
    </div>
    </div>
*/
/*
<div className="py-4 px-2 w-full border bg-white rounded-lg text-green-600 font-semibold text-xl lg:text-3xl">
                        <p>${productPrice? productPrice[0].price.replace(/(\/)/g, "/ "): "It's totally free!!!"}</p><p>${productPrice ? productPrice[0].plan : "Free!!!"}</p> </div>
                        <div className="py-4 px-2 w-full border bg-white rounded-lg text-yellow-500 font-semibold text-xl lg:text-3xl">
                        <p>${productPrice? productPrice[1].price.replace(/(\/)/g, "/ "): "It's totally free!!!"}</p><p>${productPrice ? productPrice[1].plan : "Free!!!"}</p> </div>
                        <div className="py-4 px-2 w-full border bg-white rounded-lg text-rose-500 font-semibold text-xl lg:text-3xl">
                        <p>${productPrice ? productPrice[2].price : "Free!!!"}</p><p>${productPrice ? productPrice[2].plan : "Free!"}</p> </div>
*/
/*

              <button
                id="displayDetailsLabel"
                type="button"
                className="btn-close bg-red-600 text-white p-4 rounded-full absolute -top-8 -right-8 hidden lg:block"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span
                  className="material-symbols-outlined flex items-center justify-center h-8 w-8 lg:h-full w-full"
                >
                  close
                </span>
              </button>
*/