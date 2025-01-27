import { FormEvent } from 'react';

interface FormProps {
  submitProp: (numOfPegs: number) => void;
}

export default function Form({ submitProp }: FormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const numOfPegs = formData.get('numOfPegs');
    if (numOfPegs !== null) {
      submitProp(+numOfPegs);
    }
  }

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="peg-select" className="mb-4">
        Choose a the number of pegs you'd like to play with:
      </label>
      <select
        name="numOfPegs"
        id="peg-select"
        className="border rounded-xl w-min px-6 py-2 text-center mb-4"
      >
        <option value="">--Please choose an option--</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <button type="submit" className="bg-blue-500 rounded-2xl w-min px-6 py-2">
        Start
      </button>
    </form>
  );
}
