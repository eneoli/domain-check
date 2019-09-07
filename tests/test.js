const _ = require('underscore');
const assert = require('assert');
const Domain = require('../dist/index').Domain;

describe('#Domain Check', function () {
  console.log('----- WATCH YOUR DAILY LIMIT! ------');
  this.timeout(50000);

  it('google.com - TAKEN', (done) => {
    Domain.isFree('google.com').then((available) => {
      assert.strictEqual(available, false);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  it('google.org - TAKEN', (done) => {
    Domain.isFree('google.org').then((available) => {
      assert.strictEqual(available, false);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  it('google.eu - TAKEN', (done) => {
    Domain.isFree('google.eu').then((available) => {
      assert.strictEqual(available, false);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  it('google.me - TAKEN', (done) => {
    Domain.isFree('google.me').then((available) => {
      assert.strictEqual(available, false);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });


  it('google.biz - TAKEN', (done) => {
    Domain.isFree('google.biz').then((available) => {
      assert.strictEqual(available, false);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  it('google.de - TAKEN', (done) => {
    Domain.isFree('google.de').then((available) => {
      assert.strictEqual(available, false);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  it('google.at - TAKEN', (done) => {
    Domain.isFree('google.at').then((available) => {
      assert.strictEqual(available, false);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  it('google.net - TAKEN', (done) => {
    Domain.isFree('google.net').then((available) => {
      assert.strictEqual(available, false);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    })
  });

  // ----

  it('ail6iy430g.com - AVAILABLE', (done) => {
    Domain.isFree('ail6iy430g.com').then((available) => {
      assert.strictEqual(available, true);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  it('ail6iy430g.org - AVAILABLE', (done) => {
    Domain.isFree('ail6iy430g.org').then((available) => {
      assert.strictEqual(available, true);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  it('ail6iy430g.eu - AVAILABLE', (done) => {
    Domain.isFree('ail6iy430g.eu').then((available) => {
      assert.strictEqual(available, true);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  it('ail6iy430g.me - AVAILABLE', (done) => {
    Domain.isFree('ail6iy430g.me').then((available) => {
      assert.strictEqual(available, true);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });


  it('ail6iy430g.biz - AVAILABLE', (done) => {
    Domain.isFree('ail6iy430g.biz').then((available) => {
      assert.strictEqual(available, true);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  it('ail6iy430g.de - AVAILABLE', (done) => {
    Domain.isFree('ail6iy430g.de').then((available) => {
      assert.strictEqual(available, true);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  it('ail6iy430g.at - AVAILABLE', (done) => {
    Domain.isFree('ail6iy430g.at').then((available) => {
      assert.strictEqual(available, true);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    });
  });

  return it('ail6iy430g.net - AVAILABLE', (done) => {
    Domain.isFree('ail6iy430g.net').then((available) => {
      assert.strictEqual(available, true);
      return done();
    }).catch((err) => {
      assert.ifError(err);
      return done();
    })
  });

});