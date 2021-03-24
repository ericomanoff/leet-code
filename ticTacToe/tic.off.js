const tictactoe = require("./tic");

describe('tictactoe', () => {
  it('it should work with A row win', () => {
    const given = [[0, 0], [2, 0], [0, 1], [2, 1], [0, 2]]
    const want = 'A'

    expect(tictactoe(given)).toEqual(want)
  });

  it('it should work with A col win', () => {
    const given = [[0, 0], [1, 1], [1, 0], [2, 1], [2, 0]]
    const want = 'A'

    expect(tictactoe(given)).toEqual(want)
  });

  it('it should work with A diagonal win', () => {
    const given = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]
    const want = 'A'

    expect(tictactoe(given)).toEqual(want)
  });


  it('it should work with B row win', () => {
    const given = [[0, 0], [2, 0], [0, 1], [2, 1], [1, 2], [2, 2]]
    const want = 'B'

    expect(tictactoe(given)).toEqual(want)
  });

  it('it should work with B col win', () => {
    const given = [[2, 2], [0, 0], [1, 1], [1, 0], [2, 1], [2, 0]]
    const want = 'B'

    expect(tictactoe(given)).toEqual(want)
  });


  it('it should work with B diagonal win', () => {
    const given = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]
    const want = 'B'

    expect(tictactoe(given)).toEqual(want)
  });

  it('it should work with a draw', () => {
    const given = [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]
    const want = 'Draw'

    expect(tictactoe(given)).toEqual(want)
  });

  it('it should work with pending', () => {
    const given = [[0, 0], [1, 1]];
    const want = 'Pending'

    expect(tictactoe(given)).toEqual(want)
  });

  it('it should work with pending', () => {

    const given = [[2, 2], [0, 1], [0, 2], [2, 1]]
      ;
    const want = 'Pending'

    expect(tictactoe(given)).toEqual(want)
  });

  it.only('it should work with pending', () => {

    const given = [[1, 2], [1, 0], [0, 0], [0, 1], [2, 1]];
    const want = 'Pending'

    expect(tictactoe(given)).toEqual(want)
  });

});