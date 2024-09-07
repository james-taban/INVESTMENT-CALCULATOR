export default function Input({ onChangeInput, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(event) =>
              onChangeInput(event.target.value, 'initialInvestment')
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(event) =>
              onChangeInput(event.target.value, 'annualInvestment')
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={input.expectedReturn}
            onChange={(event) =>
              onChangeInput(event.target.value, 'expectedReturn')
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={(event) => onChangeInput(event.target.value, 'duration')}
          />
        </p>
      </div>
    </section>
  )
}
