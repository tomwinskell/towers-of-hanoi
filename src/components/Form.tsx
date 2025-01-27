interface FormProps {
  handleSubmit: () => void;
}

export default function Form({ handleSubmit }: FormProps) {
  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={() => handleSubmit()}
    >
      <label className="mb-4" htmlFor="">
        How many pegs would you like to play with today?
      </label>
      <input
        className="border rounded-xl w-min px-6 py-2 text-center mb-4"
        type="text"
      />
      <button className="bg-blue-500 rounded-2xl w-min px-6 py-2">Start</button>
    </form>
  );
}
