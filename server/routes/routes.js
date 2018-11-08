import Path from 'path';

export default [
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: Path.resolve(__dirname, './../../public/bin/'),
        redirectToSlash: true,
        index: true,
      }
    }
  },

  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {

      const context = {
        page: {
          title: 'Notable Health Demo',
          env: process.env.NODE_ENV,
          pageName: 'main',
          cssArray: ['./public/css/main.css'],
          jsArray:  ['./public/js/main.js'],
        }
      };

      context.state = `window.state = ${JSON.stringify(context)};`;

      return h.view('main.js', context);
    }
  },

  {
    method: 'GET',
    path: '/api/doctors',
    handler: (request, h) => {

      const context = {
        doctors: [
          {
            id: 1,
            email: 'hibbert@notablehealth.com',
            name: {
              first: 'Julius',
              last: 'Hibbert'
            }
          },
          {
            id: 2,
            email: 'krieger@notablehealth.com',
            name: {
              first: 'Algernop',
              last: 'Krieger'
            }
          },
          {
            id: 3,
            email: 'riviera@notablehealth.com',
            name: {
              first: 'Nick',
              last: 'Riviera'
            }
          },
        ]
      };

      return context;
    }
  },
  {
    method: 'GET',
    path: '/api/doctors/{id}',
    handler: (request, h) => {

      const data = [
        {
          id: 1,
          doctorId: 2,
          patient: 'Sterling Archer',
          time: '8:00AM',
          kind: 'alcoholism',
        },
        {
          id: 2,
          doctorId: 2,
          time: '8:30AM',
          patient: 'cyril figis',
          kind: 'Stick Removal',
        },
        {
          id: 3,
          doctorId: 2,
          time: '9:00AM',
          patient: 'Ray Gilette',
          kind: 'Leg Transplant',
        },
        {
          id: 4,
          doctorId: 2,
          time: '9:30AM',
          patient: 'Lana Kane',
          kind: 'Man Hands',
        },
        {
          id: 5,
          doctorId: 2,
          time: '10:00AM',
          patient: 'Pam Poovey',
          kind: 'Anger Management',
        },
        {
          id: 6,
          doctorId: 1,
          patient: 'Eric Cartman',
          time: '8:00AM',
          kind: 'Diet',
        },
        {
          id: 7,
          doctorId: 1,
          patient: 'Stan Marsh',
          time: '8:30AM',
          kind: 'Anxiety issues',
        },
        {
          id: 8,
          doctorId: 1,
          time: '9:00AM',
          patient: 'Kenny McCormic',
          kind: 'Death',
        },
        {
          id: 8,
          doctorId: 3,
          time: '9:30AM',
          patient: 'Bruce Wayne',
          kind: 'Misses Parents',
        },
        {
          id: 9,
          doctorId: 3,
          time: '10:00AM',
          patient: 'Clark Kent',
          kind: 'Identity Issues',
        },
      ];

      return {
        appointments: data.filter(apt => apt.doctorId === Number(request.params.id))
      };
    }
  }
];
