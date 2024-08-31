import React from "react";
import { FaTimes } from "react-icons/fa";

type ReviewModalProps = {
  onClose: () => void;
  onSubmit: () => void;
  onReviewChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rating: string;
  review: string;
};

export const ReviewModal: React.FC<ReviewModalProps> = ({
  onClose,
  onReviewChange,
  onRatingChange,
  onSubmit,
  rating,
  review,
}) => {
  return (
    <div
      className={`text-n-7 fixed flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform popup-visible z-50`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 p-6 relative z-10">
        <div className="flex justify-between items-center">
          <p className="font-bold">Give Review</p>
          <button
            type="button"
            className="border-0 bg-transparent focus:outline-none"
            onClick={onClose}
          >
            <FaTimes className="text-n-7" />
          </button>
        </div>
        <div className="mt-5">
          <div className="text-md my-5 text-start">
            <label className="font-semibold">Rate us : </label>
            <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
              <input
                className="block w-full border border-gray-400 rounded-lg py-2 px-4 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                type="number"
                placeholder="Input your Rating (1-5)"
                min={1}
                step={1}
                max={5}
                onChange={(e) => onRatingChange(e)}
                value={rating}
                required
              />
            </div>
          </div>
          <div className="text-md my-5 text-start">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Review:
            </label>
            <textarea
              className="block w-full border border-gray-400 rounded-lg py-2 px-4 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Input your review..."
              onChange={onReviewChange}
              value={review}
              rows={4}
              required
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button
            onClick={onSubmit}
            style={{ backgroundColor: "#66BB6A" }}
            className="duration-200 hover:scale-105 w-full font-bold shadow-sm rounded-xl p-3 text-white flex items-center justify-center"
          >
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
