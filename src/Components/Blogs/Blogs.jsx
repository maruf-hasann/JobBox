import React from 'react';

const Blogs = () => {
    return (
      <div className="my_container space-y-4 text-center lg:text-left">
        <div>
          <h3 className="font-bold text-2xl">
            When should you use context API?
          </h3>
          <p className="text-gray-500">
            Context is primarily used when some data needs to be accessible by
            many components at different nesting levels.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl">What is a custom hook?</h3>
          <p className="text-gray-500">
            Custom React JS hooks are reusable functions that a React JS
            software developer can use to add special and unique functionality
            to the React applications
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl">What is useRef??</h3>
          <p className="text-gray-500">
            UseRef is built-in React hook that accepts one argument as the
            initial value and returns a reference (aka ref). A reference is an
            object having a special property current
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl">What is useMemo?</h3>
          <p className="text-gray-500">
            useMemo is a React Hook that lets you cache the result of a
            calculation between re-renders. const cachedValue =
            useMemo(calculateValue, dependencies) Reference.
            useMemo(calculateValue, dependencies)
          </p>
        </div>
      </div>
    );
};

export default Blogs;