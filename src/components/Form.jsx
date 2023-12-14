import PropTypes from "prop-types";

const JoinForm = ({ jtext }) => {
  return (
    <section className="mt-20">
      <div className="font-mono text-gray-500 text-lg box mx-auto mt-5 flex flex-col">
        Welcome to I/O Erros! <br />
        Lets begin the adventure
        <form className="text-black font-sans mt-3 ml-0">
          <label htmlFor="email" className="block">
            <span className="block text-sm font-medium text-slate-700">
              Username
            </span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input_box"
            />
          </label>
          <label htmlFor="password" className="block">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input_box"
            />
          </label>
          <button type="submit" className="elevate_button">
            {jtext}
          </button>
        </form>
      </div>
    </section>
  );
};

JoinForm.propTypes = {
  jtext: PropTypes.string.isRequired, // 确保 jtext 是一个必须的字符串类型属性
};

export default JoinForm;
