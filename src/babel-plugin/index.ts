import * as t from '@babel/types';
import type { BabelAPI } from '@babel/helper-plugin-utils';
import type { PluginObj } from '@babel/core';

interface Options {
  exportMapFilePath?: string;
}

export default (api: BabelAPI, options: Options): PluginObj => {
  return {
    visitor: {
      Program({ node }, state) {},
    },
  };
};
