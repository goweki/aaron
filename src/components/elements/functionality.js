export function FunctionalitiesBrief() {
  return (
    <section className="px-12">
      <div className="max-w-lg mx-auto relative">
        <input
          id="function-1"
          type="radio"
          name="slider"
          className="sr-only peer/1"
          defaultChecked
        />
        <input
          id="function-2"
          type="radio"
          name="slider"
          className="sr-only peer/2"
        />
        <input
          id="function-3"
          type="radio"
          name="slider"
          className="sr-only peer/3"
        />
        <input
          id="function-4"
          type="radio"
          name="slider"
          className="sr-only peer/4"
        />
        <input
          id="function-5"
          type="radio"
          name="slider"
          className="sr-only peer/5"
        />

        <div
          className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/1:[&_article]:ring
                        peer-focus-visible/1:[&_article]:ring-indigo-300
                        peer-checked/1:relative
                        peer-checked/1:z-50
                        peer-checked/1:translate-x-0
                        peer-checked/1:scale-100
                        peer-checked/1:[&>label]:pointer-events-none
                        
                        peer-checked/2:-translate-x-20
                        peer-checked/2:scale-[83.75%]
                        peer-checked/2:z-40
                        
                        peer-checked/3:-translate-x-40
                        peer-checked/3:z-30
                        
                        peer-checked/4:-translate-x-40                    
                        peer-checked/4:opacity-0
                        
                        peer-checked/5:-translate-x-40
                    "
        >
          <label className="absolute inset-0" htmlFor="function-1">
            <span className="sr-only">Audio classification</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <img
                className="inline-flex rounded-full shadow mb-3"
                src="/logo.png"
                width="44"
                height="44"
                alt="Icon"
              />
              <h1 className="text-xl font-bold text-slate-900">
                Audio classification
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>Classify audio as either speech or music</p>
              {/* <p>
                All the generators tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
              </p> */}
            </div>
            <footer className="text-right">
              {/* <a
                className="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
              >
                Request Demo
              </a> */}
            </footer>
          </article>
        </div>

        <div
          className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/2:[&_article]:ring
                        peer-focus-visible/2:[&_article]:ring-indigo-300                        
                        peer-checked/1:translate-x-20
                        peer-checked/1:scale-[83.75%]
                        peer-checked/1:z-40
                        
                        peer-checked/2:relative
                        peer-checked/2:z-50
                        peer-checked/2:translate-x-0
                        peer-checked/2:scale-100
                        peer-checked/2:[&>label]:pointer-events-none
                        
                        peer-checked/3:-translate-x-20
                        peer-checked/3:scale-[83.75%]
                        peer-checked/3:z-40
                        
                        peer-checked/4:-translate-x-40
                        peer-checked/4:z-30
                        
                        peer-checked/5:-translate-x-40 
                        peer-checked/5:opacity-0
                    "
        >
          <label className="absolute inset-0" htmlFor="function-2">
            <span className="sr-only">Audio fingerprinting & watermarking</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <img
                className="inline-flex rounded-full shadow mb-3"
                src="/logo.png"
                width="44"
                height="44"
                alt="Icon"
              />
              <h1 className="text-xl font-bold text-slate-900">
                Audio fingerprinting & watermarking
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>Tag an audio for later recognition and identification</p>
              {/* <p>
                All the generators tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
              </p> */}
            </div>
            <footer className="text-right">
              {/* <a
                className="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
              >
                Request Demo{" "}
              </a> */}
            </footer>
          </article>
        </div>

        <div
          className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/3:[&_article]:ring
                        peer-focus-visible/3:[&_article]:ring-indigo-300                          
                        peer-checked/1:translate-x-40
                        peer-checked/1:z-30
                        
                        peer-checked/2:translate-x-20
                        peer-checked/2:scale-[83.75%]
                        peer-checked/2:z-40
                        
                        peer-checked/3:relative
                        peer-checked/3:z-50
                        peer-checked/3:translate-x-0
                        peer-checked/3:scale-100
                        peer-checked/3:[&>label]:pointer-events-none
                        
                        peer-checked/4:-translate-x-20
                        peer-checked/4:scale-[83.75%]
                        peer-checked/4:z-40
                        
                        peer-checked/5:-translate-x-40
                        peer-checked/5:z-30                  
                    "
        >
          <label className="absolute inset-0" htmlFor="function-3">
            <span className="sr-only">Music identification</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <img
                className="inline-flex rounded-full shadow mb-3"
                src="/logo.png"
                width="44"
                height="44"
                alt="Icon"
              />
              <h1 className="text-xl font-bold text-slate-900">
                Music identification
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                Music recognition and identification by watermark or fingerprint
              </p>
              {/* <p>
                All the generators tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
              </p> */}
            </div>
            <footer className="text-right">
              {/* <a
                className="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
              >
                Request Demo
              </a> */}
            </footer>
          </article>
        </div>

        <div
          className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/4:[&_article]:ring
                        peer-focus-visible/4:[&_article]:ring-indigo-300                          
    
                        peer-checked/1:translate-x-40 
                        peer-checked/1:opacity-0
                        
                        peer-checked/2:translate-x-40
                        peer-checked/2:z-30
                        
                        peer-checked/3:translate-x-20
                        peer-checked/3:scale-[83.75%]
                        peer-checked/3:z-40
    
                        peer-checked/4:relative
                        peer-checked/4:z-50
                        peer-checked/4:translate-x-0
                        peer-checked/4:scale-100
                        peer-checked/4:[&>label]:pointer-events-none
                        
                        peer-checked/5:-translate-x-20
                        peer-checked/5:scale-[83.75%]
                        peer-checked/5:z-40
                    "
        >
          <label className="absolute inset-0" htmlFor="function-4">
            <span className="sr-only">Speech Recognition</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <img
                className="inline-flex rounded-full shadow mb-3"
                src="/logo.png"
                width="44"
                height="44"
                alt="Icon"
              />
              <h1 className="text-xl font-bold text-slate-900">
                Speech Recognition
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>Recognize speech and generate a transcript</p>
              {/* <p>
                All the generators tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
              </p> */}
            </div>
            <footer className="text-right">
              {/* <a
                className="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
              >
                Request Demo
              </a> */}
            </footer>
          </article>
        </div>

        <div
          className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/5:[&_article]:ring
                        peer-focus-visible/5:[&_article]:ring-indigo-300                          
                        peer-checked/1:translate-x-40 
                        
                        peer-checked/2:translate-x-40 
                        peer-checked/2:opacity-0
                        
                        peer-checked/3:translate-x-40
                        peer-checked/3:z-30
                        
                        peer-checked/4:translate-x-20
                        peer-checked/4:scale-[83.75%]
                        peer-checked/4:z-40
                        
                        peer-checked/5:relative
                        peer-checked/5:z-50
                        peer-checked/5:translate-x-0
                        peer-checked/5:scale-100
                        peer-checked/5:[&>label]:pointer-events-none
                    "
        >
          <label className="absolute inset-0" htmlFor="function-5">
            <span className="sr-only">Autonomous Operations</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <img
                className="inline-flex rounded-full shadow mb-3"
                src="/logo.png"
                width="44"
                height="44"
                alt="Icon"
              />
              <h1 className="text-xl font-bold text-slate-900">
                Autonomous operations
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>Automatically log analytics with little human supervision</p>
              {/* <p>
                All the generators tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
              </p> */}
            </div>
            <footer className="text-right">
              {/* <a
                className="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
              >
                Read more
              </a> */}
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
