using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;

namespace Application.Activities.Query
{
    public class GetActivityList
    {
        public class Query : IRequest<List<Domain.Activity>> {}

        public class Handler(AppDBContext context) : IRequestHandler<Query, List<Domain.Activity>>
        {
            public async Task<List<Domain.Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}