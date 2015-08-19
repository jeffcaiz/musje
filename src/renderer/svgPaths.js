/* global musje */

(function (musje) {
  'use strict';

  musje.svgPaths = {

    // https://upload.wikimedia.org/wikipedia/commons/a/a6/Sharp.svg
    '#': 'M6.102,7.457V2.753L8.102,2.201V6.881L6.102,7.457zM10.04,6.319L8.665,6.713V2.033L10.04,1.649V-0.295L8.665,0.089V-4.69277H8.102V0.234L6.102,0.809V-3.84077H5.571V0.986L4.196,1.371V3.319L5.571,2.935V7.606L4.196,7.989V9.929L5.571,9.545V14.299L6.102,14.29977V9.375L8.102,8.825V13.45077H8.665V8.651L10.04,8.266V6.319z',

    // https://upload.wikimedia.org/wikipedia/commons/3/3a/DoubleSharp.svg
    '##': 'M5.009,8.30721C4.27443,8.19192 3.52769,8.19209 2.7858,8.19294C2.77007,7.65011 2.85674,7.0729 2.6415,6.56343C2.49821,6.22426 2.22532,5.95665 1.98269,5.68155C1.59552,6.0278 1.27751,6.48475 1.24704,7.01638C1.21706,7.40767 1.23902,7.80085 1.2322,8.19294C0.4904,8.20416-0.25918,8.16828-0.991,8.314C-0.84988,7.5863-0.88195,6.84171-0.86917,6.1048C-0.3043,6.08953 0.30023,6.17101 0.82484,5.92526C1.13441,5.78023 1.39653,5.55295 1.6591,5.33676C1.3173,4.94965 0.87346,4.60861 0.33665,4.57651C-0.06427,4.54485-0.46734,4.56793-0.86917,4.56097C-0.89434,3.82949-0.80895,3.08855-0.96079,2.3663C-0.23733,2.49697 0.50065,2.46343 1.2322,2.47284C1.24306,2.99383 1.18483,3.53381 1.33191,4.0355C1.44414,4.41838 1.74978,4.71293 2.0051,5.01521C2.36553,4.70111 2.69057,4.30706 2.75011,3.81412C2.804,3.36793 2.76123,2.91977 2.7858,2.47284C3.52263,2.45348 4.28215,2.54713 4.99535,2.314C4.88891,3.05711 4.87889,3.81152 4.88717,4.56097C4.36127,4.57582 3.80954,4.51747 3.30955,4.69457C2.92975,4.8291 2.63114,5.12341 2.32869,5.38325C2.65661,5.71867 3.0516,6.02802 3.5403,6.07368C3.98834,6.11554 4.43829,6.09658 4.88717,6.1048C4.89828,6.83958 4.86193,7.5825 5.009,8.30721z',

    // https://upload.wikimedia.org/wikipedia/commons/b/ba/Flat.svg
    b: 'M8.166,3.657C8.166,4.232 7.950425,4.78273 7.359,5.52188C6.732435,6.30494 6.205,6.75313 5.51,7.28013V3.848C5.668,3.449 5.901,3.126 6.21,2.878C6.518,2.631 6.83,2.507 7.146,2.507C7.668,2.507 7.999,2.803 8.142,3.393C8.158,3.441 8.166,3.529 8.166,3.657zM8.091,1.257C7.66,1.257 7.222,1.376 6.776,1.615C6.33,1.853 5.908,2.172 5.51,2.569V-4.70267H4.947 V7.75213C4.947,8.10413 5.043,8.28013 5.235,8.28013C5.346,8.28013 5.483913,8.18713 5.69,8.06413C6.27334,7.71598 6.636935,7.48332 7.032,7.23788C7.482617,6.95792 7.99,6.631 8.661,5.991C9.124,5.526 9.459,5.057 9.667,4.585C9.874,4.112 9.978,3.644 9.978,3.179C9.978,2.491 9.795,2.002 9.429,1.713C9.015,1.409 8.568,1.257 8.091,1.257z',

    // https://upload.wikimedia.org/wikipedia/commons/f/f4/Music-natural.svg
    n: 'M 0,14.112V41.52h-1.248V31.248l-6.672,1.728V5.232h1.2v10.704l6.72,-1.824zm-6.72,6.432v7.536l5.472,-1.44v-7.536l-5.472,1.44z',

    ACCIDENTAL_RATIOS: { '#': 0.043, 'n': 0.023, '##': 0.062, b: 0.057 },
    ACCIDENTAL_SHIFTS: { '#': 1, 'n': 2, '##': -4, b: 0 }
  };

}(musje));
