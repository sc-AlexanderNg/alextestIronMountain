// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NAVIGATION_GQL = `
query  {
    fields: item(path: "__datasource__", language: "__LANG__") {
      ... on Navigation_341097f16ec54c218b19c7414d0c9061 {
        logo {
          jsonValue
        }
        searchLink {
          jsonValue
        }
        freeQuoteButtonLink{
          jsonValue
        }
        utilityNav{
          jsonValue
        }
        searchSettings{
          jsonValue
        }
        disableSearch{
          jsonValue
        }
        logoLink
        {
          jsonValue
        }
        children{
            results{
              ... on NavigationLevelOne{
                title{
                  jsonValue
                }
                id
                template{
                  id
                }
                name
                displayName
              }
              children{
                results{
                  ... on NavigationLevelTwoSection{
                    title{
                      jsonValue
                    }
                    template{
                      id
                    }
                  }
                  ... on QuickAccessSection{
                    title{
                      jsonValue
                    }
                    template{
                      id
                    }
                  }
                  children{
                    results{
                      ... on QuickAccessLinks{
                        link{
                          jsonValue
                        }
                        id
                        template{
                          id
                        }
                        name
                        displayName
                      }
                      ... on NavigationLevelTwoLinks{
                        title{
                          jsonValue
                        }
                        link{
                          jsonValue
                        }
                        id
                                template{
                                  id
                                }
                        name
                        displayName
                      }
                      children{
                        results{
                          ... on NavigationLevelThreeSection{
                            title{
                              jsonValue
                            }
                            id
                            template{
                              id
                            }
                            name
                            displayName
                          }
                          children{
                            results{
                              ... on NavigationLevelThreeLinks{
                                title{
                                  jsonValue
                                }
                                link{
                                  jsonValue
                                }
                                id
                                template{
                                  id
                                }
                                name
                                displayName
                              }
                              children{
                                results{
                                  ... on NavigationLevelFourSection{
                                    title{
                                      jsonValue
                                    }
                                    id
                                    template{
                                      id
                                    }
                                    name
                                    displayName
                                  }
                                  children{
                                    results{
                                      ... on NavigationLevelFourLinks{
                                        title{
                                          jsonValue
                                        }
                                        link{
                                          jsonValue
                                        }
                                        id
                                        template{
                                          id
                                        }
                                        name
                                        displayName
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
        }
      }
    }
  }
`;
