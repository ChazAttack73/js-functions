var expect = chai.expect;

////////////function #1: numberToString tests

describe('numberToString', function() {

  it('should exist', function() {
    expect(numberToString).to.exist;
    expect(numberToString).to.be.a('function');
  });

  it('should return a stringified number', function() {
    var result = numberToString(9);

    expect( result ).to.be.a('string');
    expect( result ).to.be.equal('9');
    expect( result.length ).to.be.equal(1);

    result = numberToString(10);

    expect( result ).to.be.a('string');
    expect( result ).to.be.equal('10');
    expect( result.length ).to.be.equal(2);
  });

  it('should throw an error if argument is not a number', function() {
    var boundFn = numberToString.bind(null, '3');

    expect( boundFn ).to.throw( TypeError );
    expect( boundFn ).to.throw( TypeError, 'Please give me a number' );

    boundFn = numberToString.bind(null, 'NaN');

    expect( boundFn ).to.throw( TypeError );
    expect( boundFn ).to.throw( TypeError, 'Please give me a number' );
  });
});

////////////function #2: increase tests

describe('increase', function() {

  it('should exist', function() {
    expect( increase ).to.exist;
    expect( increase ).to.be.a('function');
  });

  it('should add one to the number', function() {
    var result = increase(9);

    expect( result ).to.be.a( 'number' );
    expect( result ).to.be.equal(10);

    result = increase(-5);

    expect( result ).to.be.a( 'number' );
    expect( result ).to.be.equal(-4);
  });

  it('should throw an error if argument is not a number', function() {
    var boundFn = increase.bind(null, '3');

    expect( boundFn ).to.throw( TypeError );
    expect( boundFn ).to.throw( TypeError, 'Please give me a number' );

    boundFn = increase.bind(null, 'NaN');

    expect( boundFn ).to.throw( TypeError );
    expect( boundFn ).to.throw( TypeError, 'Please give me a number' );
  });
});

////////////function #3: decrease tests

describe('decrease', function() {

  it('should exist', function() {
    expect( decrease ).to.exist;
    expect( decrease ).to.be.a('function');
  });

  it('should subtract one from the number', function() {
    var result = decrease(9);

    expect( result ).to.be.a( 'number' );
    expect( result ).to.be.equal(8);

    result = decrease(-5);

    expect( result ).to.be.a( 'number' );
    expect( result ).to.be.equal(-6);
  });

  it('should throw an error if argument is not a number', function() {
    var boundFn = decrease.bind(null, '3');

    expect( boundFn ).to.throw( TypeError );
    expect( boundFn ).to.throw( TypeError, 'Please give me a number' );

    boundFn = decrease.bind(null, 'NaN');

    expect( boundFn ).to.throw( TypeError );
    expect( boundFn ).to.throw( TypeError, 'Please give me a number' );
  });
});

////////////function #4: add tests

describe('add', function() {

  it('should exist', function() {
    expect( add ).to.exist;
    expect( add ).to.be.a('function');
  });

  it('should return the sum of parameters x and y', function() {
    var result = add(9, 4);

    expect( result ).to.be.a( 'number' );
    expect( result ).to.be.equal(13);

    result = add(27, -42);

    expect( result ).to.be.a( 'number' );
    expect( result ).to.be.equal(-15);
  });

  it('should throw an error if argument is not a number', function() {
    var boundFn = add.bind(null, '3');

    expect( boundFn ).to.throw( TypeError );
    expect( boundFn ).to.throw( TypeError, 'Please give me a number' );

    boundFn = add.bind(null, 'NaN');

    expect( boundFn ).to.throw( TypeError );
    expect( boundFn ).to.throw( TypeError, 'Please give me a number' );
  });
});