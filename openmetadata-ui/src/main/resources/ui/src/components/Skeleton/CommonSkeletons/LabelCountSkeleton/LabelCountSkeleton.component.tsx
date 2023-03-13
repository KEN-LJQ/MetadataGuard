/*
 *  Copyright 2023 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import { Col, Row, Skeleton } from 'antd';
import React from 'react';
import { LabelCountSkeletonProps } from '../../Skeleton.interfaces';

const LabelCountSkeleton = ({
  key,
  isSelect,
  isLabel,
  isCount,
  labelProps,
  selectProps,
  countProps,
  ...props
}: LabelCountSkeletonProps) => {
  return (
    <Row justify="space-between" key={key}>
      {isSelect || isLabel ? (
        <Col span={20}>
          <div className="w-48 flex">
            {isSelect ? (
              <div>
                <Skeleton
                  active
                  paragraph={{ rows: 0 }}
                  title={{
                    width: 14,
                  }}
                  {...props}
                  {...selectProps}
                />
              </div>
            ) : null}
            {isLabel ? (
              <div className="m-l-xs">
                <Skeleton
                  active
                  paragraph={{ rows: 0 }}
                  title={{
                    width: 100,
                  }}
                  {...props}
                  {...labelProps}
                />
              </div>
            ) : null}
          </div>
        </Col>
      ) : null}
      <Col span={4}>
        {isCount ? (
          <Skeleton
            active
            paragraph={{ rows: 0 }}
            title={{
              width: 40,
            }}
            {...props}
            {...countProps}
          />
        ) : null}
      </Col>
    </Row>
  );
};

export default LabelCountSkeleton;
