import {
waitTimeout,
  waitDarkTimeout,
  disableTimersAndAnimations,
  dashbaord
} from '../fixtures/routes'

const buildUri = ({ path, query }: { path: string; query?: any }) => {
  let uri = path

  if (query) {
    const args = []
    for (const key of Object.keys(query)) {
      args.push(`${key}=${query[key]}`)
    }

    uri += `?${args.join('&')}`
  }

  console.log('uri:', uri)

  return uri
}

describe('Desktop - Viewport (1274*714)', () => {
  beforeEach(() => {
    cy.viewport(1274, 714)
  })



  for (const route of dashbaord) {
    it(`Desktop - Minimal Layout - ${route.name}`, () => {
      cy.visit(buildUri(route))
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')
      cy.get('html').invoke('toggleClass', 'no-scroll')

      cy.screenshot(
        `${route.prefix}/${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').then(($body) => {
        if ($body.find('.header-nav').length > 0) {
          cy.get('.header-nav').then(($button) => {
            if ($button.is(':visible')) {
              $button.trigger('click')
            } else {
              $body.addClass('no-click-event')
            }
          })
        } else {
          $body.addClass('no-click-event')
        }
      })
    //  cy.wait(waitDarkTimeout)

      cy.screenshot(
        `${route.prefix}/${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-signup`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )
    })
  }

})
