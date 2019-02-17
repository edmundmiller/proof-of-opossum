# Example Subgraph
An example to help you get started with The Graph. For more information see the docs on https://thegraph.com/docs/.

## Usage
1. Run `graph auth https://api.thegraph.com/deploy/ <your access token>`
   to authenticate with the hosted service. You can get the access token from
   https://thegraph.com/explorer/dashboard/.

2. Type `cd graph` to enter the subgraph.

3. Run `yarn` to install dependencies.

4. Run `yarn codegen` to generate code from contract ABIs and the GraphQL schema.

5. Run `yarn deploy` to deploy the subgraph to
   https://thegraph.com/explorer/subgraph/sharad-s/proof_of_oppossum.
