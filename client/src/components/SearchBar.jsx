const SearchBar = ({
  search,
  setSearch,
  priceFilter,
  setPriceFilter,
}) => {

  return (

    <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col md:flex-row gap-5 mb-10">

      {/* SEARCH INPUT */}

      <input
        type="text"
        placeholder="Search by title or location..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="flex-1 border p-4 rounded-xl outline-none"
      />

      {/* PRICE FILTER */}

      <select
        value={priceFilter}
        onChange={(e) =>
          setPriceFilter(
            e.target.value
          )
        }
        className="border p-4 rounded-xl"
      >

        <option value="">
          All Prices
        </option>

        <option value="1000000">
          Under ₹10 Lakhs
        </option>

        <option value="5000000">
          Under ₹50 Lakhs
        </option>

        <option value="10000000">
          Under ₹1 Crore
        </option>

      </select>

    </div>
  )
}

export default SearchBar